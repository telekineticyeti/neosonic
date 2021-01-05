import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'artists-lister',
  templateUrl: './artists-lister.component.html',
  styleUrls: ['./artists-lister.component.scss'],
})
export class ArtistsListerComponent {
  @Input() public artists: neosonic.Artist[];
  @Output() public artistClick = new EventEmitter<airsonicEvents.ArtistClick>();

  public artistClicked(click: airsonicEvents.ArtistClick): void {
    click.event.stopImmediatePropagation();
    this.artistClick.emit(click);
  }
}
