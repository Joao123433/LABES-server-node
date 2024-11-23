import { eq } from 'drizzle-orm';
import { db } from '../db';
import { client } from '../db/schema';

export async function deleteClient(codigo: string) {
	const deleteClientFetch = db
		.delete(client)
		.where(eq(client.codigo, codigo))
		.returning();

	return {
		deleteClientFetch,
	};
}
