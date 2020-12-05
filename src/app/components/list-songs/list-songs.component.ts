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

  // TODO: temporary measure until proper effect formatting is in place.
  // public isFavourite(val: string): boolean {
  //   console.log(val);
  //   return val === 'true';
  // }

  public ngOnInit(): void {}
}
