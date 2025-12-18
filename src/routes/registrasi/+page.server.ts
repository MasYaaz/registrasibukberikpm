import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('user')?.toString() ?? '';
		const password = data.get('pass')?.toString() ?? '';

		if (!username && !password) {
			return fail(400, { error: 'User & Password tidak boleh kosong' });
		}

		if (!username) {
			return fail(400, { error: 'User tidak boleh kosong' });
		}

		if (!password) {
			return fail(400, { error: 'Password tidak boleh kosong' });
		}

		// validasi user dan password
		if (username !== env.ADMIN_USER) {
			return fail(401, { error: 'User salah' });
		}

		if (password !== env.ADMIN_PASS) {
			return fail(401, { error: 'Password salah' });
		}

		// Minimal token random
		const token = crypto.randomUUID();

		// Set session cookie
		cookies.set('session', token, {
			path: '/',
			secure: true,
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 4 // 4 jam
		});

		return { success: 'Login Berhasil..!' };
	}
};
