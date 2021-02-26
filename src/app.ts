import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import createConnection from "./database";
import { router } from "./routers";
import { AppError } from "./errors/AppError";

createConnection();
const app = express();

app.use(express.json());
app.use(router);

app.use(
	(err: Error, request: Request, response: Response, _next: NextFunction) => {
		if (err instanceof AppError) {
			return response.status(err.statusCode).json({
				message: err.message,
			});
		}

		return response.status(500).json({
			status: "Error",
			message: `Internal server error ${err.message}`,
		});
	}
);

export { app };

// * Primeiro dia
//?  No primeiro dia vamos aprender os conceitos básicos sobre o que é uma API, entender o que é o NodeJS,
//?  onde ele tem sido utilizado e qual problema ele veio solucionar e também.
//?  Vamos também conhecer o TypeScript e entender como ele irá nos ajudar durante o desenvolvimento da nossa aplicação.
//?  Já nessa aula vamos dar início ao desenvolvimento da nossa API, colocando em prática alguns dos conceitos aprendidos.

// * Segundo dia
//?  No segundo dia vamos iniciar a configuração do banco de dados na nossa aplicação, aprendendo algumas formas possíveis
//?  para realizar o acesso do banco de dados através do Nodejs. Vamos entender os conceitos de migrations, models e criar nossa primeira tabela de usuário.
//?  Também nessa aula iremos aprender e criar nosso primeiro Controller, isolando toda regra para dentro dele.

// * Terceiro dia
//?  No terceiro dia vamos conhecer o conceito de Repository e como podemos utilizar ele para separar as responsabilidades
//?  nos componentes corretos.
//?  Vamos também dar inícios aos testes automatizados e entender os benefícios que eles trazem para a nossa aplicação.

// * Quarto dia
//?  No quarto dia vamos aprender como enviar e-mail, utilizando templates customizados com informações vindas do
//?  banco de dados.
//?  Vamos aprender também como utilizar variáveis de ambiente dentro da aplicação

// * Quinto dia
//?  Nessa última aula vamos finalizar o fluxo da nossa aplicação, inserir validações dos dados recebidos e
//?  aprender como tratar os possíveis erros.

// ----- Codigos -----
//* Códigos para uso no terminal:
//? yarn dev -- inicia o servidor
//? yarn test -- inicia os testes

//* Insomia
//? Users  POST- cria novo usuário
//? Surveys POST- cria nova pesquisa
//? Surveys GET- Mostra as pesquisas
//? SendMail POST - envia a pesquisa
//? NPS GET- mostra os resultados

//* BeeKeeper
//? DELETE FROM (NAME DB)
