import {Action, createReducer, on} from '@ngrx/store';
import {ISearchAlbumsState, albumAdapter} from './search-albums.entity';
import {ISearchArtistsState, artistAdapter} from './search-artists.entity';
import {ISearchSongsState, songAdapter} from './search-songs.entity';
import {
  SearchActions,
  SearchAlbumActions,
  SearchSongActions,
} from './search.actions';

export interface ISearchState {
  albums: ISearchAlbumsState;
  songs: ISearchSongsState;
  artists: ISearchArtistsState;
}

export const initialState: ISearchState = {
  albums: albumAdapter.getInitialState({selectedId: null}),
  songs: songAdapter.getInitialState({selectedId: null}),
  artists: artistAdapter.getInitialState({selectedId: null}),
};

export const reducer = createReducer(
  initialState,

  on(SearchActions.querySuccess, (state, {songs, albums, artists}) => ({
    ...state,
    songs: songAdapter.setAll(songs, state.songs),
    albums: albumAdapter.setAll(albums, state.albums),
    artists: artistAdapter.setAll(artists, state.artists),
  })),

  on(SearchActions.clear, state => ({
    ...state,
    songs: songAdapter.removeAll(state.songs),
    albums: albumAdapter.removeAll(state.albums),
    artists: artistAdapter.removeAll(state.artists),
  })),

  // Songs
  on(SearchSongActions.updateOne, (state, {update}) => ({
    ...state,
    songs: songAdapter.updateOne(update, state.songs),
  })),
  on(SearchSongActions.updateMany, (state, {updates}) => ({
    ...state,
    songs: songAdapter.updateMany(updates, state.songs),
  })),

  // Albums
  on(SearchAlbumActions.updateOne, (state, {update}) => ({
    ...state,
    albums: albumAdapter.updateOne(update, state.albums),
  })),
  on(SearchAlbumActions.updateMany, (state, {updates}) => ({
    ...state,
    albums: albumAdapter.updateMany(updates, state.albums),
  })),

  // Artists
);

export function SearchReducer(state: ISearchState | undefined, action: Action) {
  return reducer(state, action);
}
