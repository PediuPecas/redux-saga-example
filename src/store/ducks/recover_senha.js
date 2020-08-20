import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

const { Types, Creators } = createActions({
  recoverRequest: ["data", "resposta"],
  recoverSuccess: [],
  recoverFailure: ["error"],
});

export const RecoverTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

export const recoverRequest = (state) =>
  update(state, {
    loading: { $set: true },
    error: { $set: null },
  });

export const recoverSuccess = (state) =>
  update(state, {
    loading: { $set: false },
  });

export const recoverFailure = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RECOVER_REQUEST]: recoverRequest,
  [Types.RECOVER_SUCCESS]: recoverSuccess,
  [Types.RECOVER_FAILURE]: recoverFailure,
});
