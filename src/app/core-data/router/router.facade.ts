import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../core-data.reducer';
import {RouterSelectors} from './router.selectors';

@Injectable()
export class RouterFacade {
  constructor(private store: Store<State>) {}
  public params$ = this.store.select(RouterSelectors.params);
  public state$ = this.store.select(RouterSelectors.state);
  public url$ = this.store.select(RouterSelectors.url);
}
