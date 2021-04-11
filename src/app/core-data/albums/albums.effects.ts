import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {SongActions} from '../songs/songs.actions';
import {AlbumActions} from './albums.actions';
import {AlbumsService} from './albums.service';

@Injectable()
export class AlbumEffects {
  constructor(private actions$: Actions, private albumService: AlbumsService) {}

  getAlbum$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AlbumActions.get),
      mergeMap(({id}) =>
        this.albumService.getAlbum(id).pipe(
          map(res => {
            const payload = res['subsonic-response'].album[0];

            const album: neosonic.AlbumDetails = {
              album: payload.$,
              songs: payload.song ? payload.song.map(s => s.$) : [],
            };
            return album;
          }),
          switchMap(album => [
            AlbumActions.getSuccess({album}),
            SongActions.getSuccess({songs: album.songs}),
          ]),
          catchError((error: Error) => [AlbumActions.getListFail(error)]),
        ),
      ),
    ),
  );

  getAlbumList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AlbumActions.getList),
      mergeMap(({albumType, options}) =>
        this.albumService.getAlbumsList(albumType, options).pipe(
          map(res => {
            const payload = res['subsonic-response'].albumList2[0] || {
              album: [],
            };

            const albums: neosonic.Album[] = payload.album.map(a => a.$);

            return AlbumActions.getListSuccess({albums});
          }),
          catchError((error: Error) => [AlbumActions.getListFail(error)]),
        ),
      ),
    ),
  );
}
