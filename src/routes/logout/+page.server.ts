import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ cookies }) => {
		// Hapus cookie session
		cookies.delete('session', { path: '/' });

		// Redirect kembali ke halaman login
		throw redirect(302, '/login');
	}
};
