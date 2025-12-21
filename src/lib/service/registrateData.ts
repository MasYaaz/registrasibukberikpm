import { supabase } from '$lib/supabase/supabaseClient';

// Fungsi untuk membuat kode tiket
function generateTicket(jumlah: string): string {
	// Mengonversi waktu saat ini ke string alfanumerik pendek
	const shortId = Date.now().toString(36).toUpperCase();

	// Format hasil: BB-LNY7XZK8-5
	return `BB-${shortId}-${jumlah}`;
}

export async function InsertData(nama: string, noTelpon: string, jumlah: string, domisili: string) {
	const kodeTiket = generateTicket(jumlah);

	const { data, error } = await supabase
		.from('data_hadirin')
		.insert({
			nama: nama,
			no_telpon: noTelpon,
			jumlah: jumlah,
			domisili: domisili,
			kode_tiket: kodeTiket,
			konfirm_kirim: false
		})
		.select()
		.single();

	if (error) {
		console.error('Gagal insert data:', error.message);
		return { error };
	}

	return { data };
}
