import {Update} from '@ngrx/entity';
import {createAction, props} from '@ngrx/store';

enum searchActions {
  QUERY = '[SEARCH] Start',
  QUERY_SUCCESS = '[SEARCH] Success',
  QUERY_FAIL = '[SEARCH] Fail',
  CLEAR = '[SEARCH] Clear',
}

enum songActions {
  CLICK = '[SONGS] Clicked',
  SET_SELECTED = '[SONGS] Set Selected',
  UNSET_SELECTED = '[SONGS] Unset Selected',
  UPDATE_ONE = '[SONGS] Update One',
  UPDATE_MANY = '[SONGS] Update Many',
}

enum albumActions {
  UPDATE_ONE = '[ALBUMS] Update One',
  UPDATE_MANY = '[ALBUMS] Update Many',
}

enum artistActions {
  UPDATE_ONE = '[ARTISTS] Update One',
  UPDATE_MANY = '[ARTISTS] Update Many',
}

export const SearchActions = {
  query: createAction(searchActions.QUERY, props<{query: string}>()),
  querySuccess: createAction(
    searchActions.QUERY_SUCCESS,
    props<{
      songs: airsonic.Song[];
      albums: airsonic.Album[];
      artists: airsonic.Artist[];
    }>(),
  ),
  queryFail: createAction(searchActions.QUERY_FAIL, props<Error>()),
  clear: createAction(searchActions.CLEAR),
};

export const SearchSongActions = {
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
  updateOne: createAction(
    artistActions.UPDATE_ONE,
    props<{update: Update<airsonic.Artist>}>(),
  ),
  updateMany: createAction(
    artistActions.UPDATE_MANY,
    props<{updates: Update<airsonic.Artist>[]}>(),
  ),
};
