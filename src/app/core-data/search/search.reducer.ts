import {createReducer, on} from '@ngrx/store';
import {albumAdapter, ISearchAlbumsState} from './search-albums.entity';
import {ISearchArtistsState, artistAdapter} from './search-artists.entity';
import {ISearchSongsState, songAdapter} from './search-songs.entity';
import {
  SearchAlbumActions,
  SearchArtistActions,
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

const reducer = createReducer(
  initialState,

  // Songs
  on(SearchSongActions.setAll, (state, {songs}) => ({
    ...state,
    songs: songAdapter.setAll(songs, state.songs),
  })),
  on(SearchSongActions.removeAll, state => ({
    ...state,
    songs: songAdapter.removeAll(state.songs),
  })),
  on(SearchSongActions.updateOne, (state, {update}) => ({
    ...state,
    songs: songAdapter.updateOne(update, state.songs),
  })),
  on(SearchSongActions.updateMany, (state, {updates}) => ({
    ...state,
    songs: songAdapter.updateMany(updates, state.songs),
  })),

  // Albums
  on(SearchAlbumActions.setAll, (state, {albums}) => ({
    ...state,
    albums: albumAdapter.setAll(albums, state.albums),
  })),
  on(SearchAlbumActions.removeAll, state => ({
    ...state,
    albums: albumAdapter.removeAll(state.albums),
  })),
  on(SearchAlbumActions.updateOne, (state, {update}) => ({
    ...state,
    albums: albumAdapter.updateOne(update, state.albums),
  })),
  on(SearchAlbumActions.updateMany, (state, {updates}) => ({
    ...state,
    albums: albumAdapter.updateMany(updates, state.albums),
  })),

  // Artists
  on(SearchArtistActions.setAll, (state, {artists}) => ({
    ...state,
    artists: artistAdapter.setAll(artists, state.artists),
  })),
  on(SearchArtistActions.removeAll, state => ({
    ...state,
    artists: artistAdapter.removeAll(state.artists),
  })),
);
