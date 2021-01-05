import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export const albumAdapter: EntityAdapter<neosonic.Album> = createEntityAdapter<neosonic.Album>(
  {
    selectId: (album: neosonic.Album): string => album.id,
  },
);

export interface ISearchAlbumsState extends EntityState<neosonic.Album> {
  selectedId: string | null;
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = albumAdapter.getSelectors();
