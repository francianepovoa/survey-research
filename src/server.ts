// Import database
import "reflect-metadata";
import "./database";

import express from "express";
import { router } from "./routers";

//Initialize express function
const app = express();

app.use(express.json());
app.use(router);

// Define server
app.listen(3333, () => console.log("Server is running!"));

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
