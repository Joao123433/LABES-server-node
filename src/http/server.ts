import fastifyCors from '@fastify/cors';
import fastify from 'fastify';
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from 'fastify-type-provider-zod';
import { getAllClientRoute } from './routes/get-all-clients';
import { getClientRoute } from './routes/get-client';
import { newClientRoute } from './routes/new-client';
import { deleteClientRoute } from './routes/delete-client';
import { updateClientRoute } from './routes/update-client';

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, { origin: '*' });

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(getAllClientRoute);
app.register(getClientRoute);
app.register(newClientRoute);
app.register(deleteClientRoute);
app.register(updateClientRoute);

app.listen({ port: 3000 }).then(() => {
	console.log('Server Running!!!');
});
