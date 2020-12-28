import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export const playlistAdapter: EntityAdapter<airsonic.Playlist> = createEntityAdapter<airsonic.Playlist>(
  {
    selectId: (song: airsonic.Playlist): string => song.id,
  },
);

export interface IPlaylistListsState extends EntityState<airsonic.Playlist> {
  selectedId: string | null;
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = playlistAdapter.getSelectors();
