import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../core-data.reducer';
import {SongActions} from './songs.actions';
import {SongSelectors} from './songs.selectors';

@Injectable()
export class SongsFacade {
  constructor(private store: Store<State>) {}

  public allSongs$ = this.store.select(SongSelectors.entities);
  public keys$ = this.store.select(SongSelectors.ids);
  public songById$ = this.store.select(SongSelectors.byId);
  public all$ = this.store.select(SongSelectors.all);
  public selectedSongs$ = this.store.select(SongSelectors.allSelected);

  public emptySongs(): void {
    this.store.dispatch(SongActions.deleteAll());
  }

  public click(eventPayload: airsonicEvents.SongClick) {
    this.store.dispatch(SongActions.clicked({click: eventPayload}));
  }
}
