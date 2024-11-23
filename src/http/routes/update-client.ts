import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import z from 'zod';
import { updateClient } from '../../function/update-client';

export const updateClientRoute: FastifyPluginAsyncZod = async (app) => {
	app.put(
		'/clientes/atualizar',
		{
			schema: {
				body: z.object({
					codigo: z.string(),
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
			} = req.body;

			const { updateClientFetch } = await updateClient({
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
			});

			return updateClientFetch;
		},
	);
};
