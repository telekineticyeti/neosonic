import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.scss'],
})
export class ListSongsComponent implements OnInit {
  @Input() public songs: airsonic.Song[];
  @Output() public songClick = new EventEmitter<airsonicEvents.SongClick>();
  @Output() public favClick = new EventEmitter<airsonicEvents.SongClick>();

  get empty(): boolean {
    return !this.songs.length;
  }

  public ngOnInit(): void {}

  public toggleFavourite(event: MouseEvent, song: airsonic.Song): void {
    this.favClick.emit({event, song});
  }

  public click(event: MouseEvent, song: airsonic.Song): void {
    this.songClick.emit({event, song});
  }
}
