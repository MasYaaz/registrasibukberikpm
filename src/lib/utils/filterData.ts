import { dataSantri } from '$lib/stores/dataSantri';
import { writable, derived } from 'svelte/store';

// filter value
export const filterPondok = writable('');
export const filterKendaraan = writable('');
export const filterSearch = writable('');

// dropdown list (unique)
export const pondokList = derived(dataSantri, ($ds) => {
	return [...new Set($ds.map((d) => d.pondok))];
});

export const kendaraanList = derived(dataSantri, ($ds) => {
	return [...new Set($ds.map((d) => d.kendaraan))];
});

// hasil filter otomatis (derived)
export const filteredSantri = derived(
	[dataSantri, filterPondok, filterKendaraan, filterSearch],
	([$ds, $filterPondok, $filterKendaraan, $search]) => {
		const s = $search.toLowerCase();

		return $ds.filter((d) => {
			const matchPondok = $filterPondok ? d.pondok === $filterPondok : true;
			const matchKendaraan = $filterKendaraan ? d.kendaraan === $filterKendaraan : true;

			const matchSearch =
				d.nama.toLowerCase().includes(s) ||
				d.kelas.toLowerCase().includes(s) ||
				d.pondok.toLowerCase().includes(s) ||
				d.kendaraan.toLowerCase().includes(s);

			return matchPondok && matchKendaraan && matchSearch;
		});
	}
);
