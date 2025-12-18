import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Inisialisasi nilai awal
// Cek apakah class 'dark' sudah ada di HTML (berkat script di app.html)
const defaultValue = browser ? document.documentElement.classList.contains('dark') : false;

export const isDark = writable(defaultValue);

// Subscribe untuk handle perubahan selanjutnya
isDark.subscribe((value) => {
	if (browser) {
		// Toggle class di HTML
		document.documentElement.classList.toggle('dark', value);

		// Simpan ke LocalStorage
		localStorage.setItem('theme', value ? 'dark' : 'light');
	}
});
