import { mysqlTable, bigint, varchar, boolean } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('auth_user', {
	id: varchar('id', {
		length: 15 // change this when using custom user ids
	}).primaryKey(),
	// other user attributes
	username: varchar('username', {
		length: 55
	}),
	names: varchar('names', {
		length: 255
	}),
	lastNames: varchar('last_names', {
		length: 255
	})
});

export const session = mysqlTable('auth_session', {
	id: varchar('id', {
		length: 128
	}).primaryKey(),
	userId: varchar('user_id', {
		length: 15
	}).notNull(),
	// .references(() => user.id),
	activeExpires: bigint('active_expires', {
		mode: 'number'
	}).notNull(),
	idleExpires: bigint('idle_expires', {
		mode: 'number'
	}).notNull()
});

export const key = mysqlTable('auth_key', {
	id: varchar('id', {
		length: 255
	}).primaryKey(),
	userId: varchar('user_id', {
		length: 15
	}).notNull(),
	// .references(() => user.id),
	primaryKey: boolean('primary_key').notNull(),
	hashedPassword: varchar('hashed_password', {
		length: 255
	}),
	expires: bigint('expires', {
		mode: 'number'
	})
});

// Note: PlanetScale does not support foreign keys, that's why the references() method is commented out.
