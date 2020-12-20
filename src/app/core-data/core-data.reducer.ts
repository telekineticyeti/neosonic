import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {AlbumsReducer, IAlbumsState} from './albums/albums.reducer';
import {IPlaylistsState, PlaylistsReducer} from './playlists/playlists.reducer';
import {IRouterState} from './router/router.reducer';
import {ISearchState, SearchReducer} from './search/search.reducer';
import {ISongsState, SongsReducer} from './songs/songs.reducer';

export interface State {
  playlists: IPlaylistsState;
  songs: ISongsState;
  albums: IAlbumsState;
  search: ISearchState;
  router: RouterReducerState<IRouterState>;
}

export const reducers: ActionReducerMap<State> = {
  playlists: PlaylistsReducer,
  songs: SongsReducer,
  albums: AlbumsReducer,
  search: SearchReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
