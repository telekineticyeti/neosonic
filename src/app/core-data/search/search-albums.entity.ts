import {EntityState, createEntityAdapter, EntityAdapter} from '@ngrx/entity';

export const albumAdapter: EntityAdapter<airsonic.Album> = createEntityAdapter<airsonic.Album>(
  {
    selectId: (album: airsonic.Album): string => album.id,
  },
);

export interface ISearchAlbumsState extends EntityState<airsonic.Album> {
  selectedId: string | null;
}
