import {createAction, props} from '@ngrx/store';

enum actionTypes {
  SAVE_DETAILS = '[USER] Save Details',
  SAVE_DETAILS_SUCCESS = '[USER] Save Details Success',
  SAVE_DETAILS_FAIL = '[USER] Save Details Fail',
  LOAD_DETAILS = '[USER] Load Details',
  LOAD_DETAILS_SUCCESS = '[USER] Load Details Success',
  LOAD_DETAILS_FAIL = '[USER] Load Details Fail',
  CLEAR_DETAILS = '[USER] Clear Details',
  CLEAR_DETAILS_SUCCESS = '[USER] Clear Details Success',
}

// tslint:disable-next-line: variable-name
export const UserActions = {
  save: createAction(
    actionTypes.SAVE_DETAILS,
    props<{user: neosonic.Persist['user']}>(),
  ),

  saveSuccess: createAction(
    actionTypes.SAVE_DETAILS_SUCCESS,
    props<{user: neosonic.Persist['user']}>(),
  ),

  saveFail: createAction(actionTypes.SAVE_DETAILS_FAIL, props<Error>()),

  load: createAction(actionTypes.LOAD_DETAILS),

  loadSuccess: createAction(
    actionTypes.LOAD_DETAILS_SUCCESS,
    props<{user?: neosonic.Persist['user']}>(),
  ),

  loadFail: createAction(actionTypes.LOAD_DETAILS_FAIL, props<Error>()),

  clear: createAction(actionTypes.CLEAR_DETAILS),

  clearSuccess: createAction(actionTypes.CLEAR_DETAILS_SUCCESS),
};
