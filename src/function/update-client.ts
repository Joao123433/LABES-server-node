import { eq } from 'drizzle-orm';
import { db } from '../db';
import { client } from '../db/schema';

interface ClienteInteface {
	codigo: string;
	loja: string;
	nome: string;
	fisicaJuridica: string;
	fantasia: string;
	cep: string;
	estado: string;
	endereco: string;
	bairro: string;
	codigoMunicipio: string;
	municipio: string;
	pais: string;
	telefone: string;
	cnpjCpf: string;
	dataNascimento: string;
	email: string;
	homePage: string;
	tipo: string;
	cidade: string;
}

export async function updateClient({
	codigo,
	loja,
	nome,
	fisicaJuridica,
	endereco,
	cep,
	bairro,
	cidade,
	estado,
	tipo,
	codigoMunicipio,
	homePage,
	cnpjCpf,
	fantasia,
	municipio,
	pais,
	telefone,
	dataNascimento,
	email,
}: ClienteInteface) {
	const updateClientFetch = db
		.update(client)
		.set({
			loja,
			nome,
			fisicaJuridica,
			endereco,
			cep,
			bairro,
			cidade,
			estado,
			tipo,
			codigoMunicipio,
			homePage,
			cnpjCpf,
			fantasia,
			municipio,
			pais,
			telefone,
			dataNascimento,
			email,
		})
		.where(eq(client.codigo, codigo))
		.returning();

	return {
		updateClientFetch,
	};
}
