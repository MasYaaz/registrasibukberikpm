import { readCache, writeCache } from './cache';
import { fetchSantri } from './fetch';

export async function getOrFetchSantri() {
	const cached = readCache();
	// Menggunakan cache jika cache masih berlaku
	if (cached) return cached;

	// Fetch ke database jika cache kadaluarsa
	const fresh = await fetchSantri();

	// Setelah itu tulis cache hasil fetch
	writeCache(fresh);

	// mengembalikan fresh yang berisi cache_key dan hasil fetch data_santri
	return fresh;
}
