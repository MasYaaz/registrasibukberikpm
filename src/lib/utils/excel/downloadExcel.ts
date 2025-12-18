import ExcelJS from 'exceljs';

export const downloadExcel = async (workbook: ExcelJS.Workbook, filename: string) => {
	const buffer = await workbook.xlsx.writeBuffer();
	const blob = new Blob([buffer], {
		type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
	});

	const url = URL.createObjectURL(blob);
	const link = document.createElement('a');

	link.href = url;
	link.download = filename;
	link.click();

	URL.revokeObjectURL(url);
};
