import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../core-data.reducer';
import {ArtistActions} from './artists.actions';
import {ArtistSelectors} from './artists.selectors';

@Injectable()
export class ArtistsFacade {
  constructor(private store: Store<State>) {}

  public selectedArtist$ = this.store.select(ArtistSelectors.selectedArtist);
  public info$ = this.store.select(ArtistSelectors.info);

  public getArtist(id: string): void {
    this.store.dispatch(ArtistActions.get({id}));
  }
}
