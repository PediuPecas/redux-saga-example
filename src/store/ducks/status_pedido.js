import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

const { Types, Creators } = createActions({
  statusRequest: ["data"],
  statusSuccess: ["data"],
  statusFailure: ["error"],
});

export const StatusTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

export const statusRequest = (state) =>
  update(state, {
    loading: { $set: true },
    error: { $set: null },
  });

export const statusSuccess = (state, action) =>
  update(state, {
    data: { $set: action.data },
    loading: { $set: false },
  });

export const statusFailure = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STATUS_REQUEST]: statusRequest,
  [Types.STATUS_SUCCESS]: statusSuccess,
  [Types.STATUS_FAILURE]: statusFailure,
});
