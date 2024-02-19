import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { lucia } from '$lib/server/lucia';
import type { Actions } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
	if (!locals.session) redirect(303, '/login');

	return {
		user: locals.user
	};
}) satisfies PageServerLoad;

export const actions = {
	logout: async ({ locals, cookies }) => {
		if (!locals.session) {
			return fail(401);
		}

		// this is how we invalidate the session meang that the session is not valid anymore
		await lucia.invalidateSession(locals.session.id);
		const sessionCookie = lucia.createBlankSessionCookie();
		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '.',
			...sessionCookie.attributes
		});

		// next we redirect to the login page
		redirect(303, '/login');
	}
} satisfies Actions;
