import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const session = cookies.get('session');

	if (!session) {
		throw redirect(302, '/login');
	}

	// Melempar data berupa user dan santri
	// santri adalah data hasil fetch database
	return {
		user: 'admin'
	};
};
