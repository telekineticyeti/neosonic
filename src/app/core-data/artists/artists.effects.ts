import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {ArtistActions} from './artists.actions';
import {ArtistService} from './artists.service';

@Injectable()
export class ArtistEffects {
  constructor(
    private actions$: Actions,
    private artistService: ArtistService,
  ) {}

  get$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ArtistActions.get),
      mergeMap(({id}) =>
        forkJoin([
          this.artistService.getArtist(id),
          this.artistService.getArtistInfo(id),
        ]).pipe(
          map(([getArtist, getArtistInfo]) => {
            const artistPayload = getArtist['subsonic-response'].artist[0];
            const artist = artistPayload.$;
            const albums = artistPayload.album
              ? artistPayload.album.map(a => a.$)
              : [];

            const info = getArtistInfo['subsonic-response'].artistInfo2[0];

            return {artist, albums, info};
          }),
          switchMap(({artist, albums, info}) => [
            ArtistActions.getSuccess({artist, albums}),
            ArtistActions.getInfoSuccess({info}),
          ]),
          catchError((error: Error) => [ArtistActions.getFail(error)]),
        ),
      ),
    ),
  );
}
