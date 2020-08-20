import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

const { Types, Creators } = createActions({
  emailNotificarRequest: ["data", "resposta"],
  emailNotificarSuccess: [],
  emailNotificarFailure: ["error"],
});

export const EmailNotificarTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
  notifyingAlunoId: null,
};

export const emailNotificarRequest = (state, action) =>
  update(state, {
    loading: { $set: true },
    error: { $set: null },
    notifyingAlunoId: { $set: action.data.idUser },
  });

export const emailNotificarSuccess = (state, action) =>
  update(state, {
    loading: { $set: false },
    notifyingAlunoId: { $set: null },
  });

export const emailNotificarFailure = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
    notifyingAlunoId: { $set: null },
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EMAIL_NOTIFICAR_REQUEST]: emailNotificarRequest,
  [Types.EMAIL_NOTIFICAR_SUCCESS]: emailNotificarSuccess,
  [Types.EMAIL_NOTIFICAR_FAILURE]: emailNotificarFailure,
});
