import { supabase } from '$lib/supabase/supabaseClient';

// Fungsi untuk fetch supabase seluruh data di tabel data_santri berdasarkan id
export async function fetchSantri() {
	const { data, error } = await supabase.from('data_santri').select('*').order('id');

	if (error) throw error;

	return data ?? [];
}
