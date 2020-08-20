import { call, put } from "redux-saga/effects";
import { notify } from "../../services/notification";
import api from "../../services/api";
import AuthActions from "../ducks/auth";

export function* login(action) {
  try {
    const { data: post, history } = action;
    const { data: response } = yield call(api.post, "/login", post);

    if (response.success) {
      yield put(AuthActions.loginSuccess(response.data));
      notify("success", "Olá seja bem-vindo!");
      history.push("/videos");
    } else {
      notify("error", response.message);
      yield put(AuthActions.loginFailure(response.message));
    }
  } catch (err) {
    yield put(
      AuthActions.loginFailure("Não foi possível se comunicar com o servidor")
    );
    notify("error", "Não foi possível se comunicar com o servidor");
  }
}
export function* logout(action) {
  try {
    const { history } = action;
    yield put(AuthActions.logoutSuccess());
    history.push("/login");
    notify("success", "Tchau! Até mais tarde!");
  } catch (err) {
    yield put(
      AuthActions.logoutFailure("Ops! algo deu errado, tente novamente")
    );
    notify("error", "Ops! algo deu errado");
  }
}
