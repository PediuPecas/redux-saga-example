import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import EmailNotificarActions from "../ducks/email_notificar";

export function* email_notificar(action) {
  try {
    const { data: post, resposta } = action;
    const { data: response } = yield call(
      api.post,
      `pedidos/notificar_email`,
      post
    );

    if (response.success) {
      yield put(EmailNotificarActions.emailNotificarSuccess());
      resposta(response.message, "success", "Seu e-mail foi reenviado!");
    } else {
      yield put(EmailNotificarActions.emailNotificarFailure(response.message));
      resposta(response.message, "error", "Erro!");
    }
  } catch (error) {
    yield put(
      EmailNotificarActions.emailNotificarFailure("Erro ao conectar com a API")
    );
  }
}
