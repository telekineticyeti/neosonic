import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlbumsFacade} from 'src/app/core-data/albums/albums.facade';
import {UserFacade} from 'src/app/core-data/user/user.facade';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent implements OnInit {
  constructor(
    public albumsFacade: AlbumsFacade,
    private userFacade: UserFacade,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    if (this.userFacade.loggedIn$.getValue()) {
      this.albumsFacade.getAlbumList('newest', {size: 22});
    }
  }

  public handleAlbumClick(event: airsonicEvents.AlbumClick): void {
    this.router.navigateByUrl(`/album/${event.album}`);
  }

  public handleArtistClick(event: airsonicEvents.ArtistClick): void {
    this.router.navigateByUrl(`/artist/${event.artist}`);
  }
}
