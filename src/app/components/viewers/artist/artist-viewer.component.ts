import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ArtistsFacade} from 'src/app/core-data/artists/artists.facade';
import {RouterFacade} from 'src/app/core-data/router/router.facade';
import {UserFacade} from 'src/app/core-data/user/user.facade';
import {AutoUnsubscribeAdapter} from '../../shared/adapters/auto-unsubscribe.adapter';

@Component({
  selector: 'artist-viewer',
  templateUrl: './artist-viewer.component.html',
  styleUrls: ['./artist-viewer.component.scss'],
})
export class ArtistViewerComponent
  extends AutoUnsubscribeAdapter
  implements OnInit {
  constructor(
    public artistFacade: ArtistsFacade,
    public routerFacade: RouterFacade,
    private userFacade: UserFacade,
    private router: Router,
  ) {
    super();
  }

  public ngOnInit(): void {
    if (this.userFacade.loggedIn$.getValue()) {
      const artistId$ = this.routerFacade.params$.subscribe(p => {
        if (!p.artistId) return;
        this.artistFacade.getArtist(p.artistId);
      });

      this.subscribers.push(artistId$);
    }
  }

  public ngOnDestroy(): void {
    this.unsubscribeFromAll();
    this.artistFacade.clear();
  }

  public handleAlbumClick(event: airsonicEvents.AlbumClick): void {
    this.router.navigateByUrl(`/album/${event.album}`);
  }

  public handleArtistClick(event: airsonicEvents.ArtistClick): void {
    this.router.navigateByUrl(`/artist/${event.artist}`);
  }
}
