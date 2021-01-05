import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export const artistAdapter: EntityAdapter<neosonic.Artist> = createEntityAdapter<neosonic.Artist>(
  {
    selectId: (artist: neosonic.Artist): string => artist.id,
  },
);

export interface ISearchArtistsState extends EntityState<neosonic.Artist> {
  selectedId: string | null;
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = artistAdapter.getSelectors();
