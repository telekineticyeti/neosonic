import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AlbumsFacade} from 'src/app/core-data/albums/albums.facade';
import {RouterFacade} from 'src/app/core-data/router/router.facade';
import {AutoUnsubscribeAdapter} from '../shared/adapters/auto-unsubscribe.adapter';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
})
export class AlbumsComponent extends AutoUnsubscribeAdapter implements OnInit {
  constructor(
    public albumsFacade: AlbumsFacade,
    private routerFacade: RouterFacade,
    private router: Router,
  ) {
    super();
  }

  public _albumFilter?: neosonic.getAlbumTypes;
  public albumsPerPage = 40;
  public pagesLoaded = 1;
  @ViewChild('content') public containerElementRef: ElementRef;

  public get albumFilter(): string {
    switch (this._albumFilter) {
      case 'newest':
        return 'Recently Added';
      case 'recent':
        return 'Recently Played';
      case 'starred':
        return 'Starred';
      case 'frequent':
        return 'Most Played';
      default:
        return '';
    }
  }

  public ngOnInit(): void {
    setTimeout(() => {
      const routerParams$ = this.routerFacade.params$.subscribe(params => {
        this._albumFilter = params.query ? params.query : 'newest';

        this.albumsFacade.getAlbumList(this._albumFilter, {
          size: this.albumsPerPage,
        });

        this.resetInfiniteScroll();
      });
      this.subscribers.push(routerParams$);
    });
  }

  public ngOnDestroy(): void {
    this.unsubscribeFromAll();
    this.albumsFacade.destroyCleanup();
  }

  public handleAlbumClick(event: airsonicEvents.AlbumClick): void {
    this.router.navigateByUrl(`/album/${event.album}`);
  }

  public handleArtistClick(event: airsonicEvents.ArtistClick): void {
    this.router.navigateByUrl(`/artist/${event.artist}`);
  }

  public onScroll(): void {
    const offset = this.pagesLoaded * this.albumsPerPage;

    this.albumsFacade.getAlbumList(
      this._albumFilter,
      {
        size: this.albumsPerPage,
        offset,
      },
      true,
    );

    this.pagesLoaded = this.pagesLoaded + 1;
  }

  public resetInfiniteScroll(): void {
    this.pagesLoaded = 1;
    this.containerElementRef.nativeElement.scroll({top: 0, left: 0});
  }
}
