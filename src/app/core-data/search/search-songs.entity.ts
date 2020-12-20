import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export const songAdapter: EntityAdapter<airsonic.Song> = createEntityAdapter<airsonic.Song>(
  {
    selectId: (song: airsonic.Song): string => song.id,
  },
);

export interface ISearchSongsState extends EntityState<airsonic.Song> {
  selectedId: string | null;
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = songAdapter.getSelectors();
