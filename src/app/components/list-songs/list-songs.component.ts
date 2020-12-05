import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.scss'],
})
export class ListSongsComponent implements OnInit {
  @Input() songs: airsonic.Song[];
  constructor() {}

  get empty(): boolean {
    return !this.songs.length;
  }

  public ngOnInit(): void {}
}
