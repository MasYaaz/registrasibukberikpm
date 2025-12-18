import { get } from 'svelte/store';
import { pondokToWA } from '$lib/data/noWAasatidz';
import { loading } from '$lib/utils/login/loadingStatus';
import { statusMessage } from '$lib/stores/messageBox';
import { autoClose } from '$lib/utils/message/autoClose';

/**
 * Mengirimkan pesan WhatsApp notifikasi ke Ustadz/Pengurus Pondok terkait data santri.
 * * **Alur Proses:**
 * 1. Mengambil mapping nomor telepon dari store `pondokToWA`.
 * 2. Menentukan nomor tujuan berdasarkan properti `santri.pondok`.
 * 3. Mengirim payload ke Internal API SvelteKit (`/api/send-wa`) sebagai proxy untuk menghindari CORS.
 * @async
 * @function sendWA
 * @param {Object} santri - Objek data santri yang sedang diproses.
 * @param {string} santri.nama - Nama lengkap santri.
 * @param {string} santri.pondok - Nama pondok/asrama (Key untuk mencari nomor tujuan di `pondokToWA`).
 * @param {string|null} [santri.nomer_telpon] - Nomor telepon wali santri (opsional, jika null akan tertulis 'Belum ada').
 * @returns {Promise<void>} Fungsi ini tidak mengembalikan nilai (void), tetapi memicu `alert` browser berdasarkan status pengiriman.
 * @example
 * // Contoh penggunaan:
 * const dataSantri = {
 * nama: "Ahmad Fulan",
 * pondok: "Al-Hidayah",
 * nomer_telpon: "08123456789"
 * };
 * await sendWA(dataSantri);
 */
export async function sendWA(santri: any): Promise<void> {
	loading();
	// 1. Ambil data mapping nomor WA dari Svelte Store
	const mapping = get(pondokToWA);

	// 2. Cari nomor tujuan berdasarkan key 'pondok'
	const telpon_tujuan = mapping[santri.pondok as keyof typeof mapping];

	// Validasi: Jika nomor tujuan tidak ditemukan di mapping
	if (!telpon_tujuan) {
		alert('Nomor tujuan untuk pondok ini belum diatur!');
		return;
	}

	// 3. Susun pesan yang akan dikirim
	const payload = {
		number: telpon_tujuan,
		message: `Halo Ustadz,\n${santri.nama} (${santri.pondok})\nNo Telpon Wali Santri: ${santri.nomer_telpon ?? 'Belum ada'}`
	};

	try {
		// ✅ FETCH KE INTERNAL API SVELTEKIT (Proxy)
		// Request dikirim ke server lokal SvelteKit dulu (/api/send-wa),
		// baru server meneruskan ke Ngrok/Bot WA. Ini solusi anti-CORS & Header Warning.
		const response = await fetch('/api/send-wa', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// Header 'ngrok-skip-browser-warning' tidak diperlukan di sini
				// karena sudah ditangani di sisi server (+server.ts)
			},
			body: JSON.stringify(payload)
		});

		// Parse response dari server
		const result = await response.json();
		// Cek status pengiriman dari respons API
		if (result.status) {
			await new Promise((r) => setTimeout(r, 100));
			statusMessage.set({ type: 'success', text: 'Pesan terkirim!' });
			autoClose();
		} else {
			await new Promise((r) => setTimeout(r, 100));
			statusMessage.set({
				type: 'error',
				text: 'Gagal kirim WA: ' + (result.error || 'Server Error')
			});
			autoClose();
		}
	} catch (error) {
		// Tangkap error jaringan (misal: internet mati atau server down)
		console.error('⚠️ Error Jaringan saat sendWA:', error);
		alert('Terjadi kesalahan jaringan.');
	}
}
