// src/routes/api/send-wa/+server.ts
import { json } from '@sveltejs/kit';
import { PUBLIC_API_URL } from '$env/static/public';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	const payload = await request.json();

	// Validasi URL
	if (!PUBLIC_API_URL) {
		return json({ status: false, error: 'URL API belum disetting di .env' }, { status: 500 });
	}

	try {
		// SERVER (Netlify) menembak ke NGROK
		// Server-to-server tidak mempedulikan CORS browser
		const response = await fetch(PUBLIC_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'ngrok-skip-browser-warning': 'true' // Tetap pakai ini buat nembus warning ngrok
			},
			body: JSON.stringify(payload)
		});

		const result = await response.json();

		// Teruskan jawaban dari Bot WA ke Frontend
		return json(result);
	} catch (error) {
		console.error('Proxy Error:', error);
		return json({ status: false, error: 'Gagal menghubungi Bot WA dari server' }, { status: 502 });
	}
}
