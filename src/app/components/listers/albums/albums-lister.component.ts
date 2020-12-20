import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'albums-lister',
  templateUrl: './albums-lister.component.html',
  styleUrls: ['./albums-lister.component.scss'],
})
export class AlbumsListerComponent implements OnInit {
  @Input() public albums: airsonic.Album[];
  @Output() public albumClick = new EventEmitter<airsonicEvents.AlbumClick>();

  get empty(): boolean {
    return !this.albums.length;
  }

  public ngOnInit(): void {}
}
