import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {mergeMap, catchError, map, concatMap, switchMap} from 'rxjs/operators';
import {PlaylistActions} from './playlists.actions';
import {PlaylistsService} from './playlists.service';
import {SongActions} from '../songs/songs.actions';

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
          catchError((error: Error) => of(PlaylistActions.getAllFail(error))),
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
              songs: payload.entry.map(s => s.$),
            };

            return playlist;
          }),
          switchMap(playlist => [
            PlaylistActions.getSuccess({playlist}),
            SongActions.getSuccess({songs: playlist.songs}),
          ]),
          catchError((error: Error) => of(PlaylistActions.getAllFail(error))),
        ),
      ),
    ),
  );
}
