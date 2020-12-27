import {Component, OnInit} from '@angular/core';
import {ArtistsFacade} from 'src/app/core-data/artists/artists.facade';
import {RouterFacade} from 'src/app/core-data/router/router.facade';
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
    private artistFacade: ArtistsFacade,
    private routerFacade: RouterFacade,
  ) {
    super();
  }

  public ngOnInit(): void {
    const artistId$ = this.routerFacade.params$.subscribe(p => {
      if (!p.artistId) return;
      this.artistFacade.getArtist(p.artistId);
    });

    this.subscribers.push(artistId$);
  }

  // Artists Ablums [entity]
  // Artists top songs [entity]
  // Artist info
}
