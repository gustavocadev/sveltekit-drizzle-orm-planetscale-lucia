import { mysqlTable, varchar, datetime } from 'drizzle-orm/mysql-core';

export const userTable = mysqlTable('user', {
	id: varchar('id', {
		length: 255
	}).primaryKey(),
	username: varchar('username', {
		length: 55
	}).notNull(),
	passwordHash: varchar('password_hash', {
		length: 255
	}).notNull(),
	// other user attributes
	firstName: varchar('first_name', {
		length: 255
	}),
	lastName: varchar('last_name', {
		length: 255
	})
});
export type SelectUser = typeof userTable.$inferSelect;

export const sessionTable = mysqlTable('session', {
	id: varchar('id', {
		length: 255
	}).primaryKey(),
	userId: varchar('user_id', {
		length: 255
	}).notNull(),
	// .references(() => userTable.id),
	expiresAt: datetime('expires_at').notNull()
});

// Note: PlanetScale does not support foreign keys, that's why the references() method is commented out.
