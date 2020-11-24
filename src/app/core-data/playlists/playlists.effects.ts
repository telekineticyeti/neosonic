import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {mergeMap, catchError, map} from 'rxjs/operators';
import {AirsonicApiService} from 'src/app/services/airsonic-api.service';
import {PlaylistActions} from './playlists.actions';
import {PlaylistsService} from './playlists.service';

@Injectable()
export class PlaylistsEffects {
  constructor(
    private actions$: Actions,
    private playlistService: PlaylistsService,
  ) {}

  GetPlaylists$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PlaylistActions.get),
      mergeMap(() =>
        this.playlistService.getPlaylists().pipe(
          map(res => {
            const playlists = res[
              'subsonic-response'
            ].playlists[0].playlist.map(pl => pl.$);

            return PlaylistActions.getSuccess({playlists});
          }),
          catchError((error: Error) => of(PlaylistActions.getFail(error))),
        ),
      ),
    ),
  );
}
