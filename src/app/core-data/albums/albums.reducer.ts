import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {AlbumActions} from './albums.actions';

export const adapter: EntityAdapter<airsonic.Album> = createEntityAdapter<airsonic.Album>(
  {
    selectId: (album: airsonic.Album): string => album.id,
  },
);

export interface IAlbumsState extends EntityState<airsonic.Album> {
  selectedId: string | null;
  albumDetails?: airsonic.AlbumDetails;
}

const initialState: IAlbumsState = adapter.getInitialState({
  selectedId: null,
});

const reducer = createReducer(
  initialState,
  on(AlbumActions.getListSuccess, (state, {albums}) =>
    adapter.setAll(albums, state),
  ),
  on(AlbumActions.deleteAll, state => adapter.removeAll(state)),
  on(AlbumActions.updateOne, (state, {update}) =>
    adapter.updateOne(update, state),
  ),
  on(AlbumActions.updateMany, (state, {updates}) =>
    adapter.updateMany(updates, state),
  ),
  on(AlbumActions.getSuccess, (state, {album}) => ({
    ...state,
    albumDetails: album,
  })),
  on(AlbumActions.deleteDetails, state => ({
    ...state,
    albumDetails: undefined,
  })),
);

export function AlbumsReducer(state: IAlbumsState | undefined, action: Action) {
  return reducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
