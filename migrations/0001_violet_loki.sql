CREATE TABLE IF NOT EXISTS "client" (
	"codigo" text PRIMARY KEY NOT NULL,
	"loja" text NOT NULL,
	"nome" text NOT NULL,
	"fisica_juridica" text NOT NULL,
	"fantasia" text NOT NULL,
	"cep" text NOT NULL,
	"estado" text NOT NULL,
	"endereco" text NOT NULL,
	"bairro" text NOT NULL,
	"codigo_municipio" integer NOT NULL,
	"municipio" text NOT NULL,
	"pais" text NOT NULL,
	"telefone" text NOT NULL,
	"cnpj_cpf" text NOT NULL,
	"data_nascimento" text NOT NULL,
	"emai" text NOT NULL,
	"home_page" text NOT NULL,
	"tipo" text NOT NULL
);
