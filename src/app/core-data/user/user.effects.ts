import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {PersistService} from 'src/app/services/persist.service';
import {UserActions} from './user.actions';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private persistService: PersistService,
  ) {}

  public save$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.save),
      mergeMap(({user}) =>
        this.persistService.save({user}).pipe(
          map(_ => UserActions.saveSuccess({user})),
          catchError((error: Error) => of(UserActions.saveFail(error))),
        ),
      ),
    ),
  );

  public load$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.load),
      mergeMap(_ =>
        this.persistService.load().pipe(
          map(persist => {
            if (persist.user) {
              return UserActions.loadSuccess({user: persist.user});
            }
            return UserActions.loadFail(new Error('User details not found'));
          }),
          catchError((error: Error) => of(UserActions.loadFail(error))),
        ),
      ),
    ),
  );

  public clear$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.clear),
      mergeMap(_ =>
        this.persistService
          .save({user: undefined})
          .pipe(map(_ => UserActions.clearSuccess())),
      ),
    ),
  );
}
