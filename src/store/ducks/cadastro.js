import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

const { Types, Creators } = createActions({
  cadastroRequest: ["data", "resposta"],
  cadastroSuccess: [],
  cadastroFailure: ["error"],
});

export const CadastroTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

export const cadastroRequest = (state) =>
  update(state, {
    loading: { $set: true },
    error: { $set: null },
  });

export const cadastroSuccess = (state, action) =>
  update(state, {
    loading: { $set: false },
  });

export const cadastroFailure = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CADASTRO_REQUEST]: cadastroRequest,
  [Types.CADASTRO_SUCCESS]: cadastroSuccess,
  [Types.CADASTRO_FAILURE]: cadastroFailure,
});
