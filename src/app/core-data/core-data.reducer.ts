import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {environment} from '../../environments/environment';
import {IPlaylistsState, PlaylistsReducer} from './playlists/playlists.reducer';
import {ISongsState, SongsReducer} from './songs/songs.reducer';
import {IRouterState} from './router/router.reducer';

export interface State {
  playlists: IPlaylistsState;
  songs: ISongsState;
  router: RouterReducerState<IRouterState>;
}

export const reducers: ActionReducerMap<State> = {
  playlists: PlaylistsReducer,
  songs: SongsReducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
