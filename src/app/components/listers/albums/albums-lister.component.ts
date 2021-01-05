import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'albums-lister',
  templateUrl: './albums-lister.component.html',
  styleUrls: ['./albums-lister.component.scss'],
})
export class AlbumsListerComponent {
  @Input() public albums: neosonic.Album[];
  @Output() public artistClick = new EventEmitter<airsonicEvents.ArtistClick>();
  @Output() public albumClick = new EventEmitter<airsonicEvents.AlbumClick>();

  public artistClicked(click: airsonicEvents.ArtistClick): void {
    click.event.stopImmediatePropagation();
    this.artistClick.emit(click);
  }

  public albumClicked(click: airsonicEvents.AlbumClick): void {
    click.event.stopImmediatePropagation();
    this.albumClick.emit();
  }
}
