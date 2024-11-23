import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { getAllClient } from '../../function/get-all-client';

export const getAllClientRoute: FastifyPluginAsyncZod = async (app) => {
	app.get('/clientes/listar', {}, async () => {
		const { allClients } = await getAllClient();

		return allClients;
	});
};
