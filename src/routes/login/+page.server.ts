import type { Actions } from '@sveltejs/kit';
import { lucia } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { db } from '$lib/drizzle/db';
import { userTable } from '$lib/drizzle/schema';
import { eq } from 'drizzle-orm';
import { Argon2id } from 'oslo/password';

export const load = (async ({ locals }) => {
	// let's get the session from the locals
	if (!locals.session) {
		return {};
	}

	redirect(303, '/');
}) satisfies PageServerLoad;

const loginSchema = z.object({
	username: z.string().min(3).max(20),
	password: z.string().min(6).max(100)
});

export const actions = {
	login: async ({ request, cookies }) => {
		const form = await superValidate(request, zod(loginSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		try {
			const { password, username } = form.data;

			// 1. get the user from the database
			const [user] = await db.select().from(userTable).where(eq(userTable.username, username));

			// 2. check if the user exists
			if (!user) {
				return fail(400, {
					msg: 'Invalid username or password'
				});
			}

			// 3. check if the password is correct
			const isValidPassword = await new Argon2id().verify(user.passwordHash, password);
			if (!isValidPassword) {
				return fail(400, {
					msg: 'Invalid username or password'
				});
			}

			// 4. create a session
			const session = await lucia.createSession(user.id, {});
			const sessionCookie = lucia.createSessionCookie(session.id);
			cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});
		} catch (error) {
			console.error(error);
			return fail(400);
		}

		redirect(303, '/');
	}
} satisfies Actions;
