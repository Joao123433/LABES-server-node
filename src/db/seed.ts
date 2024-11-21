import { client, db } from '../db';
import { types } from './schema';

async function seed() {
	await db.delete(types);

	const [type01, types02] = db
		.insert(types)
		.values([
			{
				title: 'CLT',
			},
			{
				title: 'Autonomo',
			},
		])
		.returning();
}

seed().then(() => {
	console.log('Seed Completed');
	client.end();
});
