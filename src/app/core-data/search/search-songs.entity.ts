import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export const songAdapter: EntityAdapter<neosonic.Song> = createEntityAdapter<neosonic.Song>(
  {
    selectId: (song: neosonic.Song): string => song.id,
  },
);

export interface ISearchSongsState extends EntityState<neosonic.Song> {
  selectedId: string | null;
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = songAdapter.getSelectors();
