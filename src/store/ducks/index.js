import { combineReducers } from "redux";

import { reducer as auth } from "./auth";
// import { reducer as login } from "./login";
import { reducer as cadastro } from "./cadastro";

import { reducer as status } from "./status_pedido";

import { reducer as email_alterar } from "./email_alterar";

import { reducer as email_reenviar } from "./email_reenviar";

import { reducer as email_notificar } from "./email_notificar";

import { reducer as recover_senha } from "./recover_senha";

import { reducer as esqueci_senha } from "./esqueci_senha";

import { reducer as alunos } from "./alunos";

const reducers = combineReducers({
  auth,
  cadastro,
  status,
  email_alterar,
  email_reenviar,
  email_notificar,
  recover_senha,
  esqueci_senha,
  alunos,
});

export default reducers;
