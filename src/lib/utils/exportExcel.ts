import type { Santri } from '$lib/types/types';
import ExcelJS from 'exceljs';
import { buildSantriSheet } from './excel/constructorSheet';
import { downloadExcel } from './excel/downloadExcel';

// Fungsi Export menggunakan ExcelJS
export const handleExportExcel = async (data: Santri[]) => {
	// Validasi data kosong
	if (!data || data.length === 0) {
		alert('Data kosong, tidak ada yang bisa diexport.');
		return;
	}

	// Ambil list nama pondok yang unik dari data
	const uniquePondok = [...new Set(data.map((d) => d.pondok))];

	// Cek jumlah pondok
	// Jika length === 1, berarti datanya terfilter (satu pondok saja).
	// Jika length > 1, berarti datanya campur (All Campus).
	const isSpecific = uniquePondok.length === 1;

	// Tentukan Nama untuk Judul
	// Kalau spesifik, ambil namanya. Kalau campur, biarkan kosong.
	const namaPondok = isSpecific ? uniquePondok[0] : 'ALL CAMPUS';

	// Set Judul Laporan
	const judulLaporan = `DATA SANTRI ${namaPondok}`;

	// Buat Workbook Baru
	const workbook = new ExcelJS.Workbook();

	buildSantriSheet(workbook, data, judulLaporan);
	await downloadExcel(workbook, `Data Santri - ${namaPondok}.xlsx`);
};
