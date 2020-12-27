import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {UtilityService} from 'src/app/services/utlity.service';
import {SearchActions, SearchSongActions} from './search.actions';
import {SearchService} from './search.service';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private searchService: SearchService,
    private utilityService: UtilityService,
  ) {}

  search$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.query),
      mergeMap(({query}) =>
        this.searchService.search(query).pipe(
          map(res => {
            const payload = res['subsonic-response'].searchResult3[0];

            const albums = payload.album ? payload.album.map(a => a.$) : [];
            const songs = payload.song ? payload.song.map(s => s.$) : [];
            const artists = payload.artist ? payload.artist.map(a => a.$) : [];
            return SearchActions.querySuccess({albums, artists, songs});
          }),
          catchError((error: Error) => [SearchActions.queryFail(error)]),
        ),
      ),
    ),
  );

  songClick$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchSongActions.clicked),
      mergeMap(({click}) => {
        const updates = this.utilityService.songSelect(click);

        return of(SearchSongActions.updateMany({updates}));
      }),
    ),
  );
}
