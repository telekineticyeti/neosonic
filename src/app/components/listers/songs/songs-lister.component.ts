import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'songs-lister',
  templateUrl: './songs-lister.component.html',
  styleUrls: ['./songs-lister.component.scss'],
})
export class SongsListerComponent {
  @Input() public songs: airsonic.Song[];
  @Output() public songClick = new EventEmitter<airsonicEvents.SongClick>();
  @Output() public favClick = new EventEmitter<airsonicEvents.SongClick>();

  get empty(): boolean {
    return !this.songs.length;
  }

  public toggleFavourite(event: MouseEvent, song: airsonic.Song): void {
    this.favClick.emit({event, song});
  }
}
