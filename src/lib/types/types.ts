// Definisi Tipe Data Santri
export interface Santri {
	nama: string;
	kelas: string;
	pondok: string;
	kendaraan: string;
	nama_penjemput: string;
	nomer_telpon: string;
	[key: string]: any;
}
