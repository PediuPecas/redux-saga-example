import { call, put } from "redux-saga/effects";
import api, { queryBuilder } from "../../services/api";
import AlunosAction from "../ducks/alunos";

export function* alunos(action) {
  try {
    const { params = {} } = action;
    const query = queryBuilder(params);
    const { data: responseData } = yield call(api.get, `video/alunos?${query}`);

    if (responseData.success) {
      const { data, pagination } = responseData;
      yield put(AlunosAction.alunosSuccess(data, pagination));
    } else {
      yield put(AlunosAction.alunosFailure(responseData.message));
    }
  } catch (error) {
    yield put(AlunosAction.alunosFailure("Erro ao conectar com a API"));
  }
}
