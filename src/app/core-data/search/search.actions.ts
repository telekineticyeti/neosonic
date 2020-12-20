import {Update} from '@ngrx/entity';
import {createAction, props} from '@ngrx/store';

enum searchActions {
  QUERY = '[SEARCH] Start',
  QUERY_SUCCESS = '[SEARCH] Success',
  QUERY_FAIL = '[SEARCH] Fail',
}

enum songActions {
  SET_ALL = '[SONGS] Set',
  REMOVE_ALL = '[SONGS] Remove All',
  CLICK = '[SONGS] Clicked',
  SET_SELECTED = '[SONGS] Set Selected',
  UNSET_SELECTED = '[SONGS] Unset Selected',
  UPDATE_ONE = '[SONGS] Update One',
  UPDATE_MANY = '[SONGS] Update Many',
}

enum albumActions {
  SET_ALL = '[ALBUMS] Set List',
  REMOVE_ALL = '[ALBUMS] Remove All',
  UPDATE_ONE = '[ALBUMS] Update One',
  UPDATE_MANY = '[ALBUMS] Update Many',
}

enum artistActions {
  SET_ALL = '[ARTISTS] Set List',
  REMOVE_ALL = '[ARTISTS] Remove All',
}

export const SearchActions = {
  query: createAction(searchActions.QUERY, props<{query: string}>()),
  querySuccess: createAction(
    searchActions.QUERY_SUCCESS,
    props<{songs: airsonic.Song[]; albums: airsonic.Album[]}>(),
  ),
  queryFail: createAction(searchActions.QUERY_FAIL, props<Error>()),
};

export const SearchSongActions = {
  setAll: createAction(songActions.SET_ALL, props<{songs: airsonic.Song[]}>()),
  removeAll: createAction(songActions.REMOVE_ALL),
  clicked: createAction(
    songActions.CLICK,
    props<{click: airsonicEvents.SongClick}>(),
  ),
  setSelected: createAction(
    songActions.SET_SELECTED,
    props<{idsToSelect: string[]}>(),
  ),
  unsetSelected: createAction(
    songActions.UNSET_SELECTED,
    props<{ids: string[]}>(),
  ),
  updateOne: createAction(
    songActions.UPDATE_ONE,
    props<{update: Update<airsonic.Song>}>(),
  ),
  updateMany: createAction(
    songActions.UPDATE_MANY,
    props<{updates: Update<airsonic.Song>[]}>(),
  ),
};

export const SearchAlbumActions = {
  setAll: createAction(
    albumActions.SET_ALL,
    props<{albums: airsonic.Album[]}>(),
  ),
  removeAll: createAction(albumActions.REMOVE_ALL),
  updateOne: createAction(
    albumActions.UPDATE_ONE,
    props<{update: Update<airsonic.Album>}>(),
  ),
  updateMany: createAction(
    albumActions.UPDATE_MANY,
    props<{updates: Update<airsonic.Album>[]}>(),
  ),
};

export const SearchArtistActions = {
  setAll: createAction(
    artistActions.SET_ALL,
    props<{artists: airsonic.Artist[]}>(),
  ),
  removeAll: createAction(artistActions.REMOVE_ALL),
};
