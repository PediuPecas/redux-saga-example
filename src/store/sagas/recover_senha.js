import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import RecoverActions from "../ducks/recover_senha";

export function* recover_senha(action) {
  try {
    const { data: post, resposta } = action;
    const { data: response } = yield call(api.post, `login/senharecover`, post);

    if (response.success) {
      yield put(RecoverActions.recoverSuccess());
      resposta(response.message, "success", "Sua Senha Foi Alterada!");
    } else {
      yield put(RecoverActions.recoverFailure(response.message));
      resposta(response.message, "error", "Erro!");
    }
  } catch (error) {
    yield put(RecoverActions.recoverFailure("Erro ao conectar com a API"));
  }
}
