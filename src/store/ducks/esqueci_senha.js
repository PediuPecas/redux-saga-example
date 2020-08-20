import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

const { Types, Creators } = createActions({
  esqueciRequest: ["data", "resposta"],
  esqueciSuccess: [],
  esqueciFailure: ["error"],
});

export const EsqueciTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

export const esqueciRequest = (state) =>
  update(state, {
    loading: { $set: true },
    error: { $set: null },
  });

export const esqueciSuccess = (state) =>
  update(state, {
    loading: { $set: false },
  });

export const esqueciFailure = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ESQUECI_REQUEST]: esqueciRequest,
  [Types.ESQUECI_SUCCESS]: esqueciSuccess,
  [Types.ESQUECI_FAILURE]: esqueciFailure,
});
