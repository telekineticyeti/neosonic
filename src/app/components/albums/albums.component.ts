import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlbumsFacade} from 'src/app/core-data/albums/albums.facade';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  constructor(public albumsFacade: AlbumsFacade, private router: Router) {}

  public ngOnInit(): void {
    this.albumsFacade.getAlbumList('newest', {size: 22});
  }

  public handleAlbumClick(event: airsonicEvents.AlbumClick): void {
    this.router.navigateByUrl(`/album/${event.album}`);
  }

  public handleArtistClick(event: airsonicEvents.ArtistClick): void {
    this.router.navigateByUrl(`/artist/${event.artist}`);
  }
}
