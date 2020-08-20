import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import EsqueciActions from "../ducks/esqueci_senha";

export function* esqueci_senha(action) {
  try {
    const { data: post, resposta } = action;
    const { data: response } = yield call(api.post, `login/emailrecover`, post);

    if (response.success) {
      yield put(EsqueciActions.esqueciSuccess());
      resposta(response.message, "success", "Seu email foi enviado!");
    } else {
      yield put(EsqueciActions.esqueciFailure(response.message));
      resposta(response.message, "error", "Erro!");
    }
  } catch (error) {
    yield put(EsqueciActions.esqueciFailure("Erro ao conectar com a API"));
  }
}
