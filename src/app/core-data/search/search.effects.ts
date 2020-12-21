import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Update} from '@ngrx/entity';
import {Action, Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {SearchActions, SearchSongActions} from './search.actions';
import {SearchSelectors} from './search.selectors';
import {SearchService} from './search.service';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private searchService: SearchService,
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
      withLatestFrom(this.store.select(SearchSelectors.allSongs)),
      mergeMap(([{click}, songs]) => {
        const clickedSong = click.song;
        const isShiftPressed = click.event.shiftKey;
        const isCtrlPressed = click.event.ctrlKey;
        const isNoModifierPressed = !isCtrlPressed && !isShiftPressed;

        // IF no modifier is pressed
        // THEN deselect all currently selected
        // AND set current click item to selected.
        if (isNoModifierPressed) {
          const updates: Update<airsonic.Song>[] = songs.map(s => {
            return {
              id: s.id,
              changes: {
                selected: s.id === clickedSong.id ? true : false,
                previousClicked: s.id === clickedSong.id ? true : false,
              },
            };
          });
          return of(SearchSongActions.updateMany({updates}));
        }

        // IF CTRL key is pressed
        // THEN keep current selected songs
        // AND set status of clicked song to selected
        if (isCtrlPressed) {
          const updates: Update<airsonic.Song>[] = songs.map(s => {
            return {
              id: s.id,
              changes: {
                selected: s.id === clickedSong.id ? true : s.selected,
                previousClicked: s.id === clickedSong.id ? true : false,
              },
            };
          });
          return of(SearchSongActions.updateMany({updates}));
        }

        // If Shift Key is pressed
        // Then select range of songs between previousClicked and currently clicked item
        // AND deslect songs outside of the range
        if (isShiftPressed) {
          const previouslyClicked = songs.findIndex(s => s.previousClicked);
          const currentlyClicked = songs.findIndex(
            s => s.id === clickedSong.id,
          );

          const songSelectRange =
            previouslyClicked < currentlyClicked
              ? songs.slice(previouslyClicked, currentlyClicked).map(s => s.id)
              : songs.slice(currentlyClicked, previouslyClicked).map(s => s.id);

          const updates: Update<airsonic.Song>[] = songs.map(s => {
            return {
              id: s.id,
              changes: {
                selected: songSelectRange.includes(s.id) ? true : false,
              },
            };
          });

          updates.push({id: clickedSong.id, changes: {selected: true}});
          return of(SearchSongActions.updateMany({updates}));
        }
      }),
    ),
  );
}
