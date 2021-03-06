import {Action, createReducer, on} from '@ngrx/store';
import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {AlbumActions} from './albums.actions';

export const adapter: EntityAdapter<neosonic.Album> = createEntityAdapter<neosonic.Album>(
  {
    selectId: (album: neosonic.Album): string => album.id,
  },
);

export interface IAlbumsState extends EntityState<neosonic.Album> {
  selectedId: string | null;
  albumDetails?: neosonic.AlbumDetails;
}

const initialState: IAlbumsState = adapter.getInitialState({
  selectedId: null,
});

const reducer = createReducer(
  initialState,
  on(AlbumActions.getListSuccess, (state, {albums, append}) =>
    append ? adapter.upsertMany(albums, state) : adapter.setAll(albums, state),
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
