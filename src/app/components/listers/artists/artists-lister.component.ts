import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'artists-lister',
  templateUrl: './artists-lister.component.html',
  styleUrls: ['./artists-lister.component.scss'],
})
export class ArtistsListerComponent {
  @Input() public artists: airsonic.Artist[];
  @Output() public artistClick = new EventEmitter<airsonicEvents.ArtistClick>();

  get empty(): boolean {
    return !this.artists.length;
  }
}