import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, from, of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { PlaylistActions } from '../actions';
import { AirsonicApiService } from 'src/app/services/airsonic-api.service';

@Injectable()
export class PlaylistsEffects {
  constructor(
    private actions$: Actions,
    private airsonicApi: AirsonicApiService
  ) {}

  GetPlaylists$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PlaylistActions.getPlaylists),
      mergeMap(() =>
        this.airsonicApi.getPlaylists().pipe(
          map((res) => {
            const playlists = res[
              'subsonic-response'
            ].playlists[0].playlist.map((pl) => pl.$);

            return PlaylistActions.getPlaylistsSuccess({ playlists });
          }),
          catchError((error: Error) =>
            of(PlaylistActions.getPlaylistsFailure(error))
          )
        )
      )
    )
  );
}
