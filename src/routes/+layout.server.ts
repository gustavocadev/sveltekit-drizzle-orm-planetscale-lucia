import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	return {
		session: locals.session
	};
}) satisfies PageServerLoad;
