import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlbumsFacade} from 'src/app/core-data/albums/albums.facade';
import {RouterFacade} from 'src/app/core-data/router/router.facade';
import {SongsFacade} from 'src/app/core-data/songs/songs.facade';
import {AutoUnsubscribeAdapter} from '../../shared/adapters/auto-unsubscribe.adapter';

@Component({
  selector: 'album-viewer',
  templateUrl: './album-viewer.component.html',
  styleUrls: ['./album-viewer.component.scss'],
})
export class AlbumViewerComponent
  extends AutoUnsubscribeAdapter
  implements OnInit, OnDestroy {
  constructor(
    public albumFacade: AlbumsFacade,
    public songsFacade: SongsFacade,
    private routerFacade: RouterFacade,
    private router: Router,
  ) {
    super();
  }

  public albumDetails?: airsonic.AlbumDetails;

  public ngOnInit(): void {
    const albumId$ = this.routerFacade.params$.subscribe(p => {
      if (!p.albumId) return;
      this.albumFacade.getAlbum(p.albumId);
    });

    const albumDetails$ = this.albumFacade.albumDetails$.subscribe(
      a => (this.albumDetails = a),
    );

    this.subscribers.push(albumId$, albumDetails$);
  }

  public ngOnDestroy(): void {
    this.unsubscribeFromAll();
    this.albumFacade.destroyCleanup();
  }

  public songCount(count: string): string {
    const numcount = parseInt(count);
    if (isNaN(numcount)) return;

    return numcount > 1 ? `${count} songs` : `${count} song`;
  }

  public gotoArtist(id: string): void {
    this.router.navigateByUrl(`/artist/${id}`);
  }

  public handleSongClick(e: airsonicEvents.SongClick): void {
    this.songsFacade.click(e);
  }

  public handleArtistClick(event: airsonicEvents.ArtistClick): void {
    this.router.navigateByUrl(`/artist/${event.artist}`);
  }

  public handleAlbumClick(event: airsonicEvents.AlbumClick): void {
    this.router.navigateByUrl(`/album/${event.album}`);
  }

  public handleFavClick(event: any): void {
    console.log(event);
  }
}
