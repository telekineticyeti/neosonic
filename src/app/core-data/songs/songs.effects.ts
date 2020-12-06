import {Injectable} from '@angular/core';
import {Action, Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {SongActions} from '../songs/songs.actions';
import {PlaylistActions} from '../playlists/playlists.actions';
import {SongSelectors} from './songs.selectors';
import {Update} from '@ngrx/entity';

@Injectable()
export class SongEffects {
  constructor(private actions$: Actions, private store: Store) {}

  songClick$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(SongActions.clicked),
      withLatestFrom(this.store.select(SongSelectors.selectAll)),
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
          return of(SongActions.updateMany({updates}));
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
          return of(SongActions.updateMany({updates}));
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
          return of(SongActions.updateMany({updates}));
        }

        return of(PlaylistActions.debug({debug: click.song.id}));
      }),
    ),
  );
}
