import {Injectable} from '@angular/core';
import {CanActivate, UrlTree} from '@angular/router';
import {Actions, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {first, takeUntil} from 'rxjs/operators';
import {UserActions} from 'src/app/core-data/user/user.actions';
import {UserFacade} from 'src/app/core-data/user/user.facade';

@Injectable({
  providedIn: 'root',
})
export class UserGuardService implements CanActivate {
  constructor(private actions$: Actions, private userFacade: UserFacade) {}

  public get loggedIn(): boolean {
    return this.userFacade.loggedIn$.getValue();
  }

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const loadSuccess$ = this.actions$.pipe(ofType(UserActions.loadSuccess));
    const loadFail$ = this.actions$.pipe(ofType(UserActions.loadFail));
    const loadCheck$ = loadSuccess$.pipe(takeUntil(loadFail$), first());

    if (!this.loggedIn) {
      loadCheck$.subscribe(_ => (this.loggedIn ? true : false));
      this.userFacade.load();
    }
    return true;
  }
}
