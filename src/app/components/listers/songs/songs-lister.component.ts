import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'songs-lister',
  templateUrl: './songs-lister.component.html',
  styleUrls: ['./songs-lister.component.scss'],
})
export class SongsListerComponent {
  @Input() public songs: airsonic.Song[];
  @Input() public removeButton = false;
  @Output() public songClick = new EventEmitter<airsonicEvents.SongClick>();
  @Output() public artistClick = new EventEmitter<airsonicEvents.ArtistClick>();
  @Output() public albumClick = new EventEmitter<airsonicEvents.AlbumClick>();
  @Output() public favClick = new EventEmitter<airsonicEvents.FavouriteClick>();
  @Output() public removeClick = new EventEmitter<airsonicEvents.RemoveClick>();

  public favClicked(click: airsonicEvents.FavouriteClick): void {
    click.event.stopImmediatePropagation();
    this.favClick.emit(click);
  }

  public artistClicked(click: airsonicEvents.ArtistClick): void {
    click.event.stopImmediatePropagation();
    this.artistClick.emit(click);
  }

  public albumClicked(click: airsonicEvents.AlbumClick): void {
    click.event.stopImmediatePropagation();
    this.albumClick.emit(click);
  }

  public removeClicked(click: airsonicEvents.RemoveClick): void {
    click.event.stopImmediatePropagation();
    this.removeClick.emit(click);
  }
}
