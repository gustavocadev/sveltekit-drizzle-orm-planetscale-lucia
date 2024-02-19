import { DrizzleMySQLAdapter } from '@lucia-auth/adapter-drizzle';
import { Lucia } from 'lucia';
import { dev } from '$app/environment';
import { userTable, type SelectUser, sessionTable } from '$lib/drizzle/schema';
import { db } from '$lib/drizzle/db';

const adapter = new DrizzleMySQLAdapter(db, sessionTable, userTable);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			username: attributes.username
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: Omit<SelectUser, 'id'>;
	}
}
