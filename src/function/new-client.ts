import { db } from '../db';
import { client } from '../db/schema';

interface ClienteInteface {
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

// Função para criar um novo cliente
export async function creteNewClient({
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
	// Insira o cliente no banco de dados
	const [newClient] = await db
		.insert(client)
		.values({
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
		.returning(); // Garantir que o retorno seja tipado corretamente

	// Retorne o cliente criado
	return { newClient };
}
