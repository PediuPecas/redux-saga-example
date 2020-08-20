import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import EmailAlterarActions from "../ducks/email_alterar";

export function* email_alterar(action) {
  try {
    const { data: post, resposta } = action;
    const { data: response } = yield call(api.post, `pedidos/alterar_email`, post);

    if (response.success) {
      yield put(EmailAlterarActions.emailSuccess());
      resposta(response.message, "success", "Seu e-mail foi alterado!");
    } else {
      yield put(EmailAlterarActions.emailFailure(response.message));
      resposta(response.message, "error", "Erro!");
    }
  } catch (error) {
    yield put(EmailAlterarActions.emailFailure("Erro ao conectar com a API"));
  }
}
