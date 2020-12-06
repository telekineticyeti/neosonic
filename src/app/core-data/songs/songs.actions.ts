import {Update} from '@ngrx/entity';
import {createAction, props} from '@ngrx/store';

enum actions {
  GET = '[SONG] Get Song',
  GET_SUCCESS = '[SONG] Get Song Success',
  GET_FAIL = '[SONG] Get Song Fail',
  DELETE = '[SONG] Delete Song',
  DELETE_SUCCESS = '[SONG] Delete Song Success',
  DELETE_FAIL = '[SONG] Delete Song Fail',
  DELETEALL = '[SONG] Delete All Songs',

  CLICK = '[SONG] Clicked',
  SET_SELECTED = '[SONGS] Set Selected',
  UNSET_SELECTED = '[SONGS] Unset Selected',

  UPDATE_ONE = '[SONG] Update One',
  UPDATE_MANY = '[SONGS] Update Many',
}

export const SongActions = {
  get: createAction(actions.GET),
  getSuccess: createAction(
    actions.GET_SUCCESS,
    props<{songs: airsonic.Song[]}>(),
  ),
  getFail: createAction(actions.GET_FAIL, props<Error>()),
  deleteAll: createAction(actions.DELETEALL),

  clicked: createAction(
    actions.CLICK,
    props<{click: airsonicEvents.SongClick}>(),
  ),
  setSelected: createAction(
    actions.SET_SELECTED,
    props<{idsToSelect: string[]}>(),
  ),
  unsetSelected: createAction(actions.UNSET_SELECTED, props<{ids: string[]}>()),

  updateOne: createAction(
    actions.UPDATE_ONE,
    props<{update: Update<airsonic.Song>}>(),
  ),
  updateMany: createAction(
    actions.UPDATE_MANY,
    props<{updates: Update<airsonic.Song>[]}>(),
  ),
};
