import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export const playlistAdapter: EntityAdapter<neosonic.Playlist> = createEntityAdapter<neosonic.Playlist>(
  {
    selectId: (song: neosonic.Playlist): string => song.id,
  },
);

export interface IPlaylistListsState extends EntityState<neosonic.Playlist> {
  selectedId: string | null;
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = playlistAdapter.getSelectors();
