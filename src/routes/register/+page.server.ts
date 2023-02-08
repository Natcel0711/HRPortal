import { fail, redirect, type Actions } from '@sveltejs/kit';
import { SignUp, type User } from '../../lib/models/user';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) throw redirect(303, '/');
};

export const actions: Actions = {
	register: async ({ request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);
		let user: User = {
			Id: 0,
			Email: data.email.toString(),
			Username: data.email.toString().split('@')[0],
			Password: data.password.toString()
		};
		let response = await SignUp(user);
		if (response?.error)
			return fail(400, {
				error: 'user exists',
				code: 400,
				email: user.Email,
				username: user.Username
			});
		throw redirect(303, '/login');
	}
};
