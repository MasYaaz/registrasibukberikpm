import type { Santri } from '$lib/types/types';
import ExcelJS from 'exceljs';
import { excelTheme } from './excelTheme';

const santriColumnMap = [
	{ key: 'no', header: 'No', width: 5 },
	{ key: 'nama', header: 'Nama Santri', width: 40 },
	{ key: 'kelas', header: 'Kelas', width: 10 },
	{ key: 'pondok', header: 'Pondok', width: 15 },
	{ key: 'kendaraan', header: 'Kendaraan', width: 15 },
	{ key: 'nama_penjemput', header: 'Nama Wali Santri', width: 25 },
	{ key: 'nomer_telpon', header: 'No. Telpon', width: 18 }
] as const;

export const buildSantriSheet = (workbook: ExcelJS.Workbook, data: Santri[], judul: string) => {
	const ws = workbook.addWorksheet('Data Santri');

	ws.columns = santriColumnMap.map((col) => ({
		key: col.key,
		width: col.width
	}));

	// ================= TITLE ===================
	ws.mergeCells('A1:G1');
	const title = ws.getCell('A1');
	title.value = judul.toUpperCase();
	title.font = { size: 16, bold: true };
	title.alignment = { horizontal: 'center', vertical: 'middle' };
	ws.getRow(1).height = 28;

	// DATE ROW
	ws.mergeCells('A2:G2');
	const date = ws.getCell('A2');
	date.value = `Tanggal Export: ${new Date().toLocaleDateString('id-ID', { dateStyle: 'full' })}`;
	date.font = { italic: true };
	date.alignment = { horizontal: 'center', vertical: 'middle' };
	ws.getRow(2).height = 20;

	ws.getRow(3).height = 8;

	// ================= HEADER ===================
	const header = ws.getRow(4);
	header.values = santriColumnMap.map((col) => col.header);
	header.height = 24;

	header.eachCell((cell) => {
		cell.font = { bold: true, color: { argb: excelTheme.headerText } };
		cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: excelTheme.headerBg } };
		cell.alignment = { horizontal: 'center', vertical: 'middle' };
		cell.border = { bottom: { style: 'medium', color: { argb: excelTheme.border } } };
	});

	// ================= BODY ===================
	data.forEach((item, i) => {
		const rowData: Record<string, any> = {
			no: i + 1
		};

		santriColumnMap.forEach((col) => {
			if (col.key !== 'no') {
				rowData[col.key] = item[col.key] ?? '-';
			}
		});

		const row = ws.addRow(rowData);

		row.height = 20;
		const zebra = i % 2 === 0;

		row.eachCell((cell, col) => {
			if (zebra) {
				cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: excelTheme.rowZebra } };
			}

			cell.alignment = {
				horizontal: excelTheme.centerColumns.includes(col) ? 'center' : 'left',
				vertical: 'middle',
				indent: excelTheme.centerColumns.includes(col) ? 0 : 1
			};
		});
	});

	return ws;
};
