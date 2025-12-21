import { supabase } from '$lib/supabase/supabaseClient';
import { error } from '@sveltejs/kit';

export const load = async ({ params, cookies }) => {
	const kodeTiket = params.kode;

	// 1. Ambil data hadirin dari Supabase
	const { data, error: dbError } = await supabase
		.from('data_hadirin')
		.select('nama, no_telpon, jumlah, domisili, kode_tiket, created_at')
		.eq('kode_tiket', kodeTiket)
		.single();

	// 2. Jika tiket tidak valid/tidak ada di DB, hapus cookie (opsional) dan beri error
	if (dbError || !data) {
		throw error(404, 'Tiket tidak ditemukan');
	}

	// 3. Sinkronisasi Cookie (Auto-Login di perangkat baru)
	// Jika user buka link ini di HP lain, otomatis HP tersebut menyimpan sesinya
	const existingCookie = cookies.get('session_tiket');
	if (existingCookie !== kodeTiket) {
		cookies.set('session_tiket', kodeTiket, {
			path: '/',
			secure: true,
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 365
		});
	}

	return { detail: data };
};
