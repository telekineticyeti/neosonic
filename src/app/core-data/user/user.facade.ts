import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {BehaviorSubject} from 'rxjs';
import {State} from '../core-data.reducer';
import {UserActions} from './user.actions';
import {UserSelectors} from './user.selectors';

@Injectable()
export class UserFacade {
  constructor(private store: Store<State>) {
    store.select(UserSelectors.user).subscribe(u => this.user$.next(u));
    store.select(UserSelectors.loggedIn).subscribe(l => this.loggedIn$.next(l));
  }

  public user$ = new BehaviorSubject<neosonic.Persist['user']>(undefined);
  public loggedIn$ = new BehaviorSubject<boolean>(false);

  public save(user: neosonic.Persist['user']): void {
    this.store.dispatch(UserActions.save({user}));
  }

  public load() {
    this.store.dispatch(UserActions.load());
  }

  public clear() {
    this.store.dispatch(UserActions.clear());
  }
}
