import { createAction, props } from '@ngrx/store';

export const getPlaylists = createAction('[Playlists] getPlaylists()');
export const getPlaylistsSuccess = createAction(
  '[Playlists] getPlaylists() success',
  props<{ playlists: airsonic.Playlist[] }>()
);
export const getPlaylistsFailure = createAction(
  '[Playlists] getPlaylists() fail',
  props<Error>()
);
