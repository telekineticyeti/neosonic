import {createAction, props} from '@ngrx/store';

enum artistActions {
  GET = '[ARTIST] Get',
  GET_SUCCESS = '[ARTIST] Get Success',
  GET_FAIL = '[ARTIST] Get Fail',
  CLEAR = '[ARTIST] Clear',
  GETINFO = '[ARTIST] Get Info',
  GETINFO_SUCCESS = '[ARTIST] Get Info Success',
  GETINFO_FAIL = '[ARTIST] Get Info Fail',
}

export const ArtistActions = {
  get: createAction(artistActions.GET, props<{id: string}>()),
  getSuccess: createAction(
    artistActions.GET_SUCCESS,
    props<{artist: airsonic.Artist; albums: airsonic.Album[]}>(),
  ),
  getFail: createAction(artistActions.GET_FAIL, props<Error>()),
  getInfo: createAction(artistActions.GETINFO, props<{id: string}>()),
  getInfoSuccess: createAction(
    artistActions.GETINFO_SUCCESS,
    props<{info: airsonic.ArtistInfo}>(),
  ),
  getInfoFail: createAction(artistActions.GETINFO_FAIL, props<Error>()),
};
