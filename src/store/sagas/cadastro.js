import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import CadastroActions from "../ducks/cadastro";

export function* cadastro(action) {
  try {
    const post = action.data;
    const { resposta } = action;
    // console.tron.log("POST", post);

    const { data } = yield call(api.post, `cadastro`, post);
    // console.tron.log(data);
    if (data.success) {
      yield put(CadastroActions.cadastroSuccess());
      resposta(data.message, "success", "Seu Cadastro Foi criado!");
    } else {
      yield put(CadastroActions.cadastroFailure(data.message));
      resposta(data.message, "error", "Erro!");
    }
  } catch (error) {
    yield put(CadastroActions.cadastroFailure("Erro ao consultar a API"));
  }
}
