import { InsertData } from '$lib/service/registrateData';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const nama = formData.get('nama')?.toString() ?? '';
		const noTelpon = formData.get('noTelpon')?.toString() ?? '';
		const jumlah = formData.get('jumlah')?.toString() ?? '';
		const domisili = formData.get('domisili')?.toString() ?? '';

		const values = { nama, noTelpon, jumlah, domisili };

		// 1. Validasi Input
		if (!nama || !noTelpon || !jumlah || !domisili) {
			return fail(400, { ...values, error: 'Semua kolom wajib diisi!' });
		}

		// 2. Simpan ke Database
		const result = await InsertData(nama, noTelpon, jumlah, domisili);

		if (!result || !result.data) {
			return fail(500, { ...values, error: 'Gagal menyimpan data.' });
		}

		const kodeTiket = result.data.kode_tiket;

		// 3. Set Cookie (Identitas Digital)
		cookies.set('session_tiket', kodeTiket, {
			path: '/',
			secure: true,
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 365 // 1 Tahun
		});

		// Kembalikan data sukses agar client-side bisa handle UI (misal: redirect atau modal)
		return {
			success: 'Pendaftaran Berhasil!',
			kodeTiket: kodeTiket
		};
	}
};
