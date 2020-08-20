import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

const { Types, Creators } = createActions({
  emailRequest: ["data", "resposta"],
  emailSuccess: [],
  emailFailure: ["error"],
});

export const EmailTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  data: null,
  loading: false,
  error: null,
};

export const emailRequest = (state) =>
  update(state, {
    loading: { $set: true },
    error: { $set: null },
  });

export const emailSuccess = (state, action) =>
  update(state, {
    loading: { $set: false },
  });

export const emailFailure = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.EMAIL_REQUEST]: emailRequest,
  [Types.EMAIL_SUCCESS]: emailSuccess,
  [Types.EMAIL_FAILURE]: emailFailure,
});
