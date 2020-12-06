import {createAction, props} from '@ngrx/store';

enum actions {
  // All Playlists Actions
  GETALL = '[PLAYLISTS] Get All Playlists',
  GETALL_SUCCESS = '[PLAYLISTS] Get All Playlists Success',
  GETALL_FAIL = '[PLAYLISTS] Get All Playlists Fail',

  // Individual Playlist Actions
  GET = '[PLAYLIST] Get Playlist',
  GET_SUCCESS = '[PLAYLIST] Get Playlist Success',
  GET_FAIL = '[PLAYLIST] Get Playlist Fail',
  CREATE = '[PLAYLISTS] Get Playlists Fail',
  CREATE_SUCCESS = '[PLAYLISTS] Get Playlists Fail',
  CREATE_FAIL = '[PLAYLISTS] Get Playlists Fail',
  DELETE = '[PLAYLISTS] Get Playlists Fail',
  DELETE_SUCCESS = '[PLAYLISTS] Get Playlists Fail',
  DELETE_FAIL = '[PLAYLISTS] Get Playlists Fail',

  UPDATE = '[PLAYLIST] Update ',
  UPDATE_SUCCESS = '[PLAYLIST] Update Success',
  UPDATE_FAIL = '[PLAYLIST] Update Fail',
}

export const PlaylistActions = {
  // All Playlists
  getAll: createAction(actions.GETALL),
  getAllSuccess: createAction(
    actions.GETALL_SUCCESS,
    props<{playlists: airsonic.Playlist[]}>(),
  ),
  getAllFail: createAction(actions.GETALL_FAIL, props<Error>()),

  // Individual Playlist
  get: createAction(actions.GET, props<{id: string}>()),
  getSuccess: createAction(
    actions.GET_SUCCESS,
    props<{playlist: airsonic.PlaylistDetails}>(),
  ),
  getFail: createAction(actions.GET_FAIL, props<Error>()),

  update: createAction(
    actions.UPDATE,
    props<{payload: airsonic.PlaylistUpdateRequest}>(),
  ),
  updateSuccess: createAction(actions.UPDATE_SUCCESS),
  updateFail: createAction(actions.UPDATE_FAIL, props<Error>()),

  debug: createAction('debug', props<{debug: string; error?: Error}>()),
};
