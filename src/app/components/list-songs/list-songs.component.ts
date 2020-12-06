import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.scss'],
})
export class ListSongsComponent {
  @Input() public songs: airsonic.Song[];
  @Output() public songClick = new EventEmitter<airsonicEvents.SongClick>();
  @Output() public favClick = new EventEmitter<airsonicEvents.SongClick>();

  get empty(): boolean {
    return !this.songs.length;
  }

  public toggleFavourite(event: MouseEvent, song: airsonic.Song): void {
    this.favClick.emit({event, song});
  }

  public click(event: MouseEvent, song: airsonic.Song): void {
    this.songClick.emit({event, song});
  }
}
