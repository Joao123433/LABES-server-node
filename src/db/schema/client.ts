import { createId } from '@paralleldrive/cuid2';
import { integer, pgTable, text } from 'drizzle-orm/pg-core';

export const client = pgTable('client', {
	codigo: text()
		.primaryKey()
		.$default(() => createId()),
	loja: text('loja').notNull(),
	nome: text('nome').notNull(),
	fisicaJuridica: text('fisica_juridica').notNull(),
	fantasia: text('fantasia').notNull(),
	cep: text('cep').notNull(),
	estado: text('estado').notNull(),
	endereco: text('endereco').notNull(),
	bairro: text('bairro').notNull(),
	codigoMunicipio: integer('codigo_municipio').notNull(),
	municipio: text('municipio').notNull(),
	pais: text('pais').notNull(),
	telefone: text('telefone').notNull(),
	cnpjCpf: text('cnpj_cpf').notNull(),
	dataNascimento: text('data_nascimento').notNull(),
	email: text('emai').notNull(),
	homePage: text('home_page').notNull(),
	tipo: text('tipo').notNull(),
});
