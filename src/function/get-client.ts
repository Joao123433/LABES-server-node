import { eq } from 'drizzle-orm';
import { db } from '../db';
import { client } from '../db/schema';

export async function getClient(idClient: string) {
	const clientFetch = db
		.select({
			codigo: client.codigo,
			nome: client.nome,
			cnpjCpf: client.cnpjCpf,
			homePage: client.homePage,
			cidade: client.cidade,
		})
		.from(client)
		.where(eq(client.codigo, idClient));

	return {
		clientFetch,
	};
}
