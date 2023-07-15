import { planetscale } from '@lucia-auth/adapter-mysql';
import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import { connect } from '@planetscale/database';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { dev } from '$app/environment';
import { DATABASE_URL } from '$env/static/private';

export const connection = connect({
	url: DATABASE_URL
});

export const db = drizzle(connection);

export const auth = lucia({
	adapter: planetscale(connection),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	transformDatabaseUser: (user) => ({
		userId: user.id,
		username: user.username,
		names: user.names,
		last_names: user.last_names
	})
});

export type Auth = typeof auth;
