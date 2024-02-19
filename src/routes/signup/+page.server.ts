import { redirect, type Actions, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { zod } from 'sveltekit-superforms/adapters';
import { db } from '$lib/drizzle/db';
import { userTable } from '$lib/drizzle/schema';
import { generateId } from 'lucia';
import { Argon2id } from 'oslo/password';

const signupSchema = z.object({
	username: z.string().min(3).max(20),
	password: z.string().min(6).max(100),

	// my custom fields
	firstName: z.string().min(3).max(100),
	lastName: z.string().min(3).max(100)
});

export const load = (async ({ locals }) => {
	if (!locals.session) return {};

	redirect(303, '/');
}) satisfies PageServerLoad;

export const actions = {
	register: async ({ request }) => {
		const form = await superValidate(request, zod(signupSchema));

		console.log(form.data);

		if (!form.valid)
			return fail(400, {
				form
			});
		const { password, firstName, lastName, username } = form.data;
		try {
			const userId = generateId(15);
			const passwordHash = await new Argon2id().hash(password);

			await db.insert(userTable).values({
				id: userId,
				passwordHash: passwordHash,
				username,
				firstName,
				lastName
			});
		} catch (error) {
			console.error(error);
			return fail(400);
		}
		redirect(303, '/login');
	}
} satisfies Actions;
