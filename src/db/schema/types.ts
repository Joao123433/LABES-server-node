import { createId } from '@paralleldrive/cuid2';
import { pgTable, text } from 'drizzle-orm/pg-core';

export const types = pgTable('types', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => createId()),
	title: text('title').notNull(),
});
