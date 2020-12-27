import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {UtilityService} from 'src/app/services/utlity.service';
import {SongActions} from '../songs/songs.actions';

@Injectable()
export class SongEffects {
  constructor(
    private actions$: Actions,
    private utilityService: UtilityService,
  ) {}

  songClick$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(SongActions.clicked),
      mergeMap(({click}) => {
        const updates = this.utilityService.songSelect(click);

        return of(SongActions.updateMany({updates}));
      }),
    ),
  );
}
