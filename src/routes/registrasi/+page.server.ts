import { InsertData } from '$lib/service/registrateData';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const nama = data.get('nama')?.toString() ?? '';
		const noTelpon = data.get('noTelpon')?.toString() ?? '';
		const jumlah = data.get('jumlah')?.toString() ?? '';
		const domisili = data.get('domisili')?.toString() ?? '';

		const values = { nama, noTelpon, jumlah, domisili };

		if (!nama || !noTelpon || !jumlah || !domisili) {
			return fail(400, { ...values, error: 'Semua kolom wajib diisi!' });
		}

		const result = await InsertData(nama, noTelpon, jumlah, domisili);

		if (!result || !result.success) {
			return fail(500, { ...values, error: 'Gagal menyimpan data.' });
		}

		const kodeTiket = result.data.kode_tiket;

		// Tetap set cookie di server agar tersimpan secara permanen
		cookies.set('session_tiket', kodeTiket, {
			path: '/',
			secure: true,
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 365 * 1
		});

		// Kembalikan data tiket, jangan di-redirect di sini
		return {
			success: true,
			message: 'Pendaftaran Berhasil!',
			kodeTiket: kodeTiket
		};
	}
};
