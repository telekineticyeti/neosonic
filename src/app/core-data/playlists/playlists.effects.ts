import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';

import {PlaylistActions} from './playlists.actions';
import {PlaylistsService} from './playlists.service';

@Injectable()
export class PlaylistsEffects {
  constructor(
    private actions$: Actions,
    private playlistService: PlaylistsService,
  ) {}

  getPlaylists$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PlaylistActions.getAll),
      mergeMap(() =>
        this.playlistService.getPlaylists().pipe(
          map(res => {
            const payload = res['subsonic-response'].playlists[0];

            const playlists: airsonic.Playlist[] = payload.playlist.map(
              playlist => playlist.$,
            );

            return PlaylistActions.getAllSuccess({playlists});
          }),
          catchError((error: Error) => [
            PlaylistActions.getAllFail(error),
            PlaylistActions.debug({
              debug: 'PlaylistActions.getFail',
              error: error,
            }),
          ]),
        ),
      ),
    ),
  );

  get$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PlaylistActions.get),
      mergeMap(({id}) =>
        this.playlistService.getPlaylist(id).pipe(
          map(res => {
            const payload = res['subsonic-response'].playlist[0];

            const playlist: airsonic.PlaylistDetails = {
              playlist: payload.$,
              songs: payload.entry ? payload.entry.map(s => s.$) : [],
            };

            return PlaylistActions.getSuccess({playlist});
          }),
          catchError((error: Error) => [
            PlaylistActions.getFail(error),
            PlaylistActions.debug({
              debug: 'PlaylistActions.getFail',
              error: error,
            }),
          ]),
        ),
      ),
    ),
  );

  $update: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PlaylistActions.update),
      mergeMap(({payload}) =>
        this.playlistService.updatePlaylist(payload).pipe(
          map(res => {
            console.log(payload);
            if (res['subsonic-response'].$.status !== 'ok') {
              return PlaylistActions.updateFail(
                new Error('API Request Failed'),
              );
            }
            return payload.playlistId;
          }),
          switchMap(id => {
            const successActions = [];
            successActions.push(PlaylistActions.updateSuccess());

            if (typeof id === 'string') {
              successActions.push(PlaylistActions.get({id}));
            }
            return successActions;
          }),
          catchError((error: Error) => [
            PlaylistActions.updateFail(error),
            PlaylistActions.debug({
              debug: 'PlaylistActions.updateFail',
              error: error,
            }),
          ]),
        ),
      ),
    ),
  );
}
