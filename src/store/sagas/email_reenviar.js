import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import EmailReenviarActions from "../ducks/email_reenviar";

export function* email_reenviar(action) {
  try {
    const { data: post, resposta } = action;
    const { data: response } = yield call(api.post, `pedidos/reenviar_email`, post);

    if (response.success) {
      yield put(EmailReenviarActions.emailSuccess());
      resposta(response.message, "success", "Seu e-mail foi reenviado!");
    } else {
      yield put(EmailReenviarActions.emailFailure(response.message));
      resposta(response.message, "error", "Erro!");
    }
  } catch (error) {
    yield put(EmailReenviarActions.emailFailure("Erro ao conectar com a API"));
  }
}
