import { supabase } from '$lib/supabase/supabaseClient';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	// Ambil data hadirin berdasarkan kode_tiket di URL
	const { data, error: dbError } = await supabase
		.from('data_hadirin')
		.select('nama,no_telpon,jumlah,domisili,kode_tiket,created_at')
		.eq('kode_tiket', params.kode)
		.single();

	if (dbError || !data) {
		throw error(404, 'Tiket tidak ditemukan');
	}

	return { detail: data };
};
