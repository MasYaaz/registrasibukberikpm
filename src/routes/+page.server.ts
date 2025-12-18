// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const session = cookies.get('session');

	if (session) {
		throw redirect(302, '/finish');
	}

	throw redirect(302, '/registrasi');
};
