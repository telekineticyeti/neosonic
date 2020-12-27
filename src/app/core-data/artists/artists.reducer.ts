import {Action, createReducer, on} from '@ngrx/store';
import {ArtistActions} from './artists.actions';
import {albumAdapter, IArtistAlbumsState} from './artists-albums.entity';

export interface IArtistState {
  selected?: airsonic.Artist;
  info?: airsonic.ArtistInfo;
  albums: IArtistAlbumsState;
  // artistTopSongs?
}

export const initialState: IArtistState = {
  albums: albumAdapter.getInitialState({selectedId: null}),
  // songs: songAdapter.getInitialState({selectedId: null}),
  // artists: artistAdapter.getInitialState({selectedId: null}),
};

export const reducer = createReducer(
  initialState,
  on(ArtistActions.getSuccess, (state, {artist, albums}) => ({
    ...state,
    selected: artist,
    albums: albumAdapter.setAll(albums, state.albums),
  })),
  on(ArtistActions.getInfoSuccess, (state, {info}) => ({...state, info})),
);

export function ArtistReducer(state: IArtistState | undefined, action: Action) {
  return reducer(state, action);
}
