import { all, takeLatest } from "redux-saga/effects";

import { AuthTypes } from "../ducks/auth";
import { login, logout } from "./auth";

// import { LoginTypes } from "../ducks/login";
// import { login } from "./login";

import { CadastroTypes } from "../ducks/cadastro";
import { cadastro } from "./cadastro";

import { StatusTypes } from "../ducks/status_pedido";
import { status } from "./status_pedido";

import { EmailTypes } from "../ducks/email_alterar";
import { email_alterar } from "./email_alterar";

import { EmailReenviarTypes } from "../ducks/email_reenviar";
import { email_reenviar } from "./email_reenviar";

import { EmailNotificarTypes } from "../ducks/email_notificar";
import { email_notificar } from "./email_notificar";

import { RecoverTypes } from "../ducks/recover_senha";
import { recover_senha } from "./recover_senha";

import { EsqueciTypes } from "../ducks/esqueci_senha";
import { esqueci_senha } from "./esqueci_senha";

import { AlunosTypes } from "../ducks/alunos";
import { alunos } from "./alunos";

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.LOGOUT_REQUEST, logout),
    takeLatest(CadastroTypes.CADASTRO_REQUEST, cadastro),
    takeLatest(StatusTypes.STATUS_REQUEST, status),
    takeLatest(EmailTypes.EMAIL_REQUEST, email_alterar),
    takeLatest(EmailReenviarTypes.EMAIL_REQUEST, email_reenviar),
    takeLatest(EmailNotificarTypes.EMAIL_NOTIFICAR_REQUEST, email_notificar),
    takeLatest(RecoverTypes.RECOVER_REQUEST, recover_senha),
    takeLatest(EsqueciTypes.ESQUECI_REQUEST, esqueci_senha),
    takeLatest(AlunosTypes.ALUNOS_REQUEST, alunos),
  ]);
}
