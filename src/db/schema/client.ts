import { createId } from '@paralleldrive/cuid2';
import { pgTable, text } from 'drizzle-orm/pg-core';

export const client = pgTable('client', {
	codigo: text('codigo')
		.primaryKey()
		.$default(() => createId()),
	loja: text('loja').notNull(),
	nome: text('nome').notNull(),
	fisicaJuridica: text('fisica_juridica').notNull(),
	endereco: text('endereco').notNull(),
	cep: text('cep').notNull(),
	bairro: text('bairro').notNull(),
	cidade: text('cidade').notNull(),
	estado: text('estado').notNull(),
	tipo: text('tipo').notNull(),
	codigoMunicipio: text('codigo_municipio').notNull(),
	homePage: text('home_page').notNull(),
	cnpjCpf: text('cnpj_cpf').notNull(),
	fantasia: text('fantasia').notNull(),
	municipio: text('municipio').notNull(),
	pais: text('pais').notNull(),
	telefone: text('telefone').notNull(),
	dataNascimento: text('data_nascimento').notNull(),
	email: text('emai').notNull(),
});
