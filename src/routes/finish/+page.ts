import { browser } from '$app/environment';
import { getOrFetchSantri } from '$lib/service/DataSantri/GetOrFetch';
import { initSantriRealtime } from '$lib/service/DataSantri/realtime.js';
import { dataSantri } from '$lib/stores/dataSantri';

export async function load() {
	if (browser) {
		// Mengisi const santri dengan data hasil fetch atau caching
		const santri = await getOrFetchSantri();

		dataSantri.set(santri);
		initSantriRealtime();
	}
}
