import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'albums-lister',
  templateUrl: './albums-lister.component.html',
  styleUrls: ['./albums-lister.component.scss'],
})
export class AlbumsListerComponent implements OnInit {
  @Input() public albums: airsonic.Album[];

  get empty(): boolean {
    return !this.albums.length;
  }

  public ngOnInit(): void {}

  public click(event: MouseEvent, album: airsonic.Album): void {
    console.log(event, album);
  }
}
