const CACHE_KEY = 'santri_data'; // Key untuk cache
const CACHE_DURATION = 1 * 24 * 60 * 60 * 1000; // Durasi cache berlaku yaitu 1 hari

// Fungsi untuk cek cache
export function readCache() {
	const cachedString = sessionStorage.getItem(CACHE_KEY);
	if (!cachedString) return null;

	const { data, timestamp } = JSON.parse(cachedString);
	if (Date.now() - timestamp > CACHE_DURATION) return null;

	return data;
}

// Fungsi untuk buat / nulis cache baru
export function writeCache(data: any[]) {
	sessionStorage.setItem(
		CACHE_KEY,
		JSON.stringify({
			data,
			timestamp: Date.now()
		})
	);
}
