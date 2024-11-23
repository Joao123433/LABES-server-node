import { db } from '../db';
import { client } from '../db/schema';

export async function getAllClient() {
	const allClients = await db
		.select({
			codigo: client.codigo,
			loja: client.loja,
			nome: client.nome,
			fisicaJuridica: client.fisicaJuridica,
			endereco: client.endereco,
			cep: client.cep,
			bairro: client.bairro,
			cidade: client.cidade,
			estado: client.estado,
			tipo: client.tipo,
			codigoMunicipio: client.codigoMunicipio,
			homePage: client.homePage,
			cnpjCpf: client.cnpjCpf,
			fantasia: client.fantasia,
			municipio: client.municipio,
			pais: client.pais,
			telefone: client.telefone,
			dataNascimento: client.dataNascimento,
			email: client.email,
		})
		.from(client);

	return {
		allClients,
	};
}
