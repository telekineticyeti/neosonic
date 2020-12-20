import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export const artistAdapter: EntityAdapter<airsonic.Artist> = createEntityAdapter<airsonic.Artist>(
  {
    selectId: (artist: airsonic.Artist): string => artist.id,
  },
);

export interface ISearchArtistsState extends EntityState<airsonic.Artist> {
  selectedId: string | null;
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = artistAdapter.getSelectors();
