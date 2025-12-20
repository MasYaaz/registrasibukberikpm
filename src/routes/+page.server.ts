// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	cookies.delete('session_tiket', { path: '/' });
	const session = cookies.get('session_tiket');

	if (session) {
		throw redirect(307, `/tiket/${session}`);
	}

	throw redirect(302, '/registrasi');
};
