import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../core-data.reducer';
import {SearchActions, SearchSongActions} from './search.actions';
import {SearchSelectors} from './search.selectors';

@Injectable()
export class SearchFacade {
  constructor(private store: Store<State>) {}

  public albumResults$ = this.store.select(SearchSelectors.allAlbums);
  public albumTotal$ = this.store.select(SearchSelectors.totalAlbums);
  public artistResults$ = this.store.select(SearchSelectors.allArtists);
  public artistTotal$ = this.store.select(SearchSelectors.totalArtists);
  public songResults$ = this.store.select(SearchSelectors.allSongs);
  public songTotal$ = this.store.select(SearchSelectors.totalSongs);

  public search(query: string): void {
    this.store.dispatch(SearchActions.query({query}));
  }

  public clear(): void {
    this.store.dispatch(SearchActions.clear());
  }

  public songClick(click: airsonicEvents.SongClick): void {
    this.store.dispatch(SearchSongActions.clicked({click}));
  }
}
