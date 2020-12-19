import {Update} from '@ngrx/entity';
import {createAction, props} from '@ngrx/store';

enum actions {
  GET = '[ALBUM] Get Album',
  GET_SUCCESS = '[ALBUM] Get Album Success',
  GET_FAIL = '[ALBUM] Get Album Fail',
  DELETE_DETAILS = '[ALBUM] Delete Details',

  GET_LIST = '[ALBUM] Get Albums List',
  GET_LIST_SUCCESS = '[ALBUM] Get Albums List Success',
  GET_LIST_FAIL = '[ALBUM] Get Albums List Fail',

  DELETEALL = '[SONG] Delete All Songs',
  UPDATE_ONE = '[ALBUM] Update One',
  UPDATE_MANY = '[ALBUMS] Update Many',
}

export const AlbumActions = {
  get: createAction(actions.GET, props<{id: string}>()),
  getSuccess: createAction(
    actions.GET_SUCCESS,
    props<{album: airsonic.AlbumDetails}>(),
  ),
  getFail: createAction(actions.GET_FAIL, props<Error>()),

  deleteDetails: createAction(actions.DELETE_DETAILS),

  getList: createAction(
    actions.GET_LIST,
    props<{
      albumType: airsonic.getAlbumTypes;
      options: airsonic.getAlbumOptions;
    }>(),
  ),
  getListSuccess: createAction(
    actions.GET_LIST_SUCCESS,
    props<{albums: airsonic.Album[]}>(),
  ),
  getListFail: createAction(actions.GET_FAIL, props<Error>()),

  deleteAll: createAction(actions.DELETEALL),

  updateOne: createAction(
    actions.UPDATE_ONE,
    props<{update: Update<airsonic.Song>}>(),
  ),
  updateMany: createAction(
    actions.UPDATE_MANY,
    props<{updates: Update<airsonic.Song>[]}>(),
  ),
};
