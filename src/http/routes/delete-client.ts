import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { deleteClient } from '../../function/delete-client';
import z from 'zod';

export const deleteClientRoute: FastifyPluginAsyncZod = async (app) => {
	app.delete(
		'/clientes/deletar',
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

			const { deleteClientFetch } = await deleteClient(codigo);

			return deleteClientFetch;
		},
	);
};
