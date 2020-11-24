import {createAction, props} from '@ngrx/store';

enum actions {
  GET = '[PLAYLISTS] Get Playlists',
  GET_SUCCESS = '[PLAYLISTS] Get Playlists Success',
  GET_FAIL = '[PLAYLISTS] Get Playlists Fail',
  CREATE = '[PLAYLISTS] Get Playlists Fail',
  CREATE_SUCCESS = '[PLAYLISTS] Get Playlists Fail',
  CREATE_FAIL = '[PLAYLISTS] Get Playlists Fail',
  DELETE = '[PLAYLISTS] Get Playlists Fail',
  DELETE_SUCCESS = '[PLAYLISTS] Get Playlists Fail',
  DELETE_FAIL = '[PLAYLISTS] Get Playlists Fail',
}

export const PlaylistActions = {
  get: createAction(actions.GET),
  getSuccess: createAction(
    actions.GET_SUCCESS,
    props<{playlists: airsonic.Playlist[]}>(),
  ),
  getFail: createAction(actions.GET_FAIL, props<Error>()),
};
