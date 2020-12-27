import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BehaviorSubject, Subscription} from 'rxjs';
import {RouterFacade} from 'src/app/core-data/router/router.facade';
import {SearchFacade} from 'src/app/core-data/search/search.facade';

@Component({
  selector: 'search-view',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(
    private routerFacade: RouterFacade,
    private router: Router,
    public searchFacade: SearchFacade,
  ) {}

  private subscriptions: Subscription[] = [];
  public query = new BehaviorSubject('');

  public ngOnInit(): void {
    const searchQuery$ = this.routerFacade.params$.subscribe(p => {
      if (!p.query) return;
      this.query.next(p.query);
      this.searchFacade.search(p.query);
    });

    setTimeout(() => {
      this.subscriptions.push(searchQuery$);
    });
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  public albumClick(event: airsonicEvents.AlbumClick): void {
    this.router.navigateByUrl(`/album/${event.album}`);
  }

  public songClick(event: airsonicEvents.SongClick): void {
    this.searchFacade.songClick(event);
  }

  public artistClick(event: airsonicEvents.ArtistClick): void {
    console.log(event);
    // this.router.navigateByUrl(`/album/${event.album}`);
  }
}
