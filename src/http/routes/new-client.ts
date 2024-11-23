import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { creteNewClient } from '../../function/new-client';
import z from 'zod';

export const newClientRoute: FastifyPluginAsyncZod = async (app) => {
	app.post(
		'/clientes/incluir',
		{
			schema: {
				body: z.object({
					loja: z.string(),
					nome: z.string(),
					fisicaJuridica: z.string(),
					endereco: z.string(),
					cep: z.string(),
					bairro: z.string(),
					cidade: z.string(),
					estado: z.string(),
					tipo: z.string(),
					codigoMunicipio: z.string(),
					homePage: z.string(),
					cnpjCpf: z.string(),
					fantasia: z.string(),
					municipio: z.string(),
					pais: z.string(),
					telefone: z.string(),
					dataNascimento: z.string(),
					email: z.string(),
				}),
			},
		},
		async (req, res) => {
			const {
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
			} = req.body;

			const { newClient } = await creteNewClient({
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
			});

			return newClient;
		},
	);
};
