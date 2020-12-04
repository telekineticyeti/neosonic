import {createAction, props} from '@ngrx/store';

enum actions {
  GET = '[SONG] Get Song',
  GET_SUCCESS = '[SONG] Get Song Success',
  GET_FAIL = '[SONG] Get Song Fail',
  DELETE = '[SONG] Delete Song',
  DELETE_SUCCESS = '[SONG] Delete Song Success',
  DELETE_FAIL = '[SONG] Delete Song Fail',
  DELETEALL = '[SONG] Delete All Songs',
}

export const SongActions = {
  get: createAction(actions.GET),
  getSuccess: createAction(
    actions.GET_SUCCESS,
    props<{songs: airsonic.Song[]}>(),
  ),
  getFail: createAction(actions.GET_FAIL, props<Error>()),
  deleteAll: createAction(actions.DELETEALL),
};
