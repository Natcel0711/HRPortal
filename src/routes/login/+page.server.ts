import { fail, redirect, type Actions } from '@sveltejs/kit';
import { SignIn, type User } from '../../lib/models/user';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) throw redirect(303, '/');
};

export const actions: Actions = {
	login: async ({ request, cookies }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);
		let user: User = {
			Id: {},
			Email: data.email.toString(),
			Password: data.password.toString(),
			Username: data.email.toString()
		};
		const res = await SignIn(user);
		if (res?.error)
			return fail(400, {
				error: 'user not found',
				code: 400,
				email: user.Email,
				username: user.Username
			});
		cookies.set('session', res.session.sessionId);
		throw redirect(303, '/');
	}
};
