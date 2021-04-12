import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../core-data.reducer';
import {SongActions} from '../songs/songs.actions';
import {SongSelectors} from '../songs/songs.selectors';
import {AlbumActions} from './albums.actions';
import {AlbumSelectors} from './albums.selectors';

@Injectable()
export class AlbumsFacade {
  constructor(private store: Store<State>) {}

  public entities$ = this.store.select(AlbumSelectors.entities);
  public keys$ = this.store.select(AlbumSelectors.ids);
  public byId$ = this.store.select(AlbumSelectors.byId);
  public all$ = this.store.select(AlbumSelectors.all);
  public albumDetails$ = this.store.select(AlbumSelectors.albumDetails);
  public songs$ = this.store.select(SongSelectors.all);

  public getAlbumList(
    albumType: neosonic.getAlbumTypes,
    options?: neosonic.getAlbumOptions,
    append: boolean = false,
  ): void {
    this.store.dispatch(AlbumActions.getList({albumType, options, append}));
  }

  public getAlbum(id: string): void {
    this.store.dispatch(AlbumActions.get({id}));
  }

  public destroyCleanup(): void {
    this.store.dispatch(SongActions.deleteAll());
    this.store.dispatch(AlbumActions.deleteDetails());
  }
}
