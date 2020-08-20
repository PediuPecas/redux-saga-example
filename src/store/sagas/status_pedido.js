import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import statusPedidoAction from "../ducks/status_pedido";

export function* status(action) {
  try {
    const post = action.data;

    const { data } = yield call(api.post, `pedidos/verificar`, post);
    if (data.success) {
      yield put(statusPedidoAction.statusSuccess(data.data));
    } else {
      yield put(statusPedidoAction.statusFailure(data.error));
    }
  } catch (error) {
    yield put(statusPedidoAction.statusFailure("Erro ao consultar a API"));
  }
}
