import {Injectable} from '@angular/core';
import {Update} from '@ngrx/entity';

@Injectable()
export class UtilityService {
  public songSelect(
    selectAction: airsonicEvents.SongClick,
  ): Update<airsonic.Song>[] {
    const clickedSong = selectAction.song;
    const songList = selectAction.songList;
    const isShiftPressed = selectAction.event.shiftKey;
    const isCtrlPressed = selectAction.event.ctrlKey;
    const isNoModifierPressed = !isCtrlPressed && !isShiftPressed;

    let selectedSongsUpdate: Update<airsonic.Song>[];

    // IF no modifier is pressed
    // THEN deselect all currently selected
    // AND set current click item to selected.
    if (isNoModifierPressed) {
      selectedSongsUpdate = songList.map(s => {
        return {
          id: s.id,
          changes: {
            selected: s.id === clickedSong.id ? true : false,
            previousClicked: s.id === clickedSong.id ? true : false,
          },
        };
      });
      return selectedSongsUpdate;
    }

    // IF CTRL key is pressed
    // THEN keep current selected songs
    // AND set status of clicked song to selected
    if (isCtrlPressed) {
      selectedSongsUpdate = songList.map(s => {
        return {
          id: s.id,
          changes: {
            selected: s.id === clickedSong.id ? true : s.selected,
            previousClicked: s.id === clickedSong.id ? true : false,
          },
        };
      });
      return selectedSongsUpdate;
    }

    // If Shift Key is pressed
    // Then select range of songs between previousClicked and currently clicked item
    // AND deslect songs outside of the range
    if (isShiftPressed) {
      const previouslyClicked = songList.findIndex(s => s.previousClicked);
      const currentlyClicked = songList.findIndex(s => s.id === clickedSong.id);

      console.log(previouslyClicked, currentlyClicked);

      const songSelectRange =
        previouslyClicked < currentlyClicked
          ? songList.slice(previouslyClicked, currentlyClicked).map(s => s.id)
          : songList.slice(currentlyClicked, previouslyClicked).map(s => s.id);

      selectedSongsUpdate = songList.map(s => {
        return {
          id: s.id,
          changes: {
            selected:
              songSelectRange.includes(s.id) ||
              s.id === clickedSong.id ||
              s.previousClicked
                ? true
                : false,
          },
        };
      });

      return selectedSongsUpdate;
    }
  }
}
