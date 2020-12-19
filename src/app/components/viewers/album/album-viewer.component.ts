import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {AlbumsFacade} from 'src/app/core-data/albums/albums.facade';
import {RouterFacade} from 'src/app/core-data/router/router.facade';
import {SongsFacade} from 'src/app/core-data/songs/songs.facade';

@Component({
  selector: 'album-viewer',
  templateUrl: './album-viewer.component.html',
  styleUrls: ['./album-viewer.component.scss'],
})
export class AlbumViewerComponent implements OnInit, OnDestroy {
  constructor(
    public albumFacade: AlbumsFacade,
    public songsFacade: SongsFacade,
    private routerFacade: RouterFacade,
  ) {}

  private subscriptions: Subscription[] = [];
  public albumDetails?: airsonic.AlbumDetails;

  public ngOnInit(): void {
    const albumId$ = this.routerFacade.params$.subscribe(p => {
      if (!p.id) return;
      this.albumFacade.getAlbum(p.id);
    });

    const albumDetails$ = this.albumFacade.albumDetails$.subscribe(
      a => (this.albumDetails = a),
    );

    this.subscriptions.push(albumId$, albumDetails$);
  }

  public ngOnDestroy(): void {
    this.albumFacade.destroyCleanup();
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public songCount(count: string): string {
    const numcount = parseInt(count);
    if (isNaN(numcount)) return;

    return numcount > 1 ? `${count} songs` : `${count} song`;
  }

  public songClick(e: airsonicEvents.SongClick): void {
    this.songsFacade.click(e);
  }

  public gotoArtist(id: string): void {
    console.log(id);
  }
}
