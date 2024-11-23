import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { getClient } from '../../function/get-client';
import z from 'zod';

export const getClientRoute: FastifyPluginAsyncZod = async (app) => {
	app.get(
		'/clientes/lista_cliente/:codigo',
		{
			schema: {
				headers: z.object({
					codigo: z.string(),
				}),
			},
		},
		async (req, res) => {
			const codigo = req.headers.codigo;

			console.log(codigo);

			const { clientFetch } = await getClient(codigo);

			return clientFetch;
		},
	);
};
