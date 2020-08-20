import { createReducer, createActions } from "reduxsauce";
import update from "immutability-helper";

const { Types, Creators } = createActions({
  alunosRequest: ["params"],
  alunosSuccess: ["data", "pagination"],
  alunosFailure: ["error"],
});

export const AlunosTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  data: [],
  pagination: null,
  loading: false,
  error: null,
};

export const alunosRequest = (state) =>
  update(state, {
    loading: { $set: true },
    error: { $set: null },
  });

export const alunosSuccess = (state, action) =>
  update(state, {
    data: { $set: action.data },
    pagination: { $set: action.pagination },
    loading: { $set: false },
  });

export const alunosFailure = (state, action) =>
  update(state, {
    loading: { $set: false },
    error: { $set: action.error },
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ALUNOS_REQUEST]: alunosRequest,
  [Types.ALUNOS_SUCCESS]: alunosSuccess,
  [Types.ALUNOS_FAILURE]: alunosFailure,
});
