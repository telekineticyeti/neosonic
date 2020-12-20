import {Component, OnDestroy, OnInit} from '@angular/core';
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
    public searchFacade: SearchFacade,
  ) {}

  private subscriptions: Subscription[] = [];
  public query = new BehaviorSubject('');

  public ngOnInit(): void {
    const searchQuery$ = this.routerFacade.params$.subscribe(p => {
      this.query.next(p.query);
      this.searchFacade.search(p.query);
    });

    const al$ = this.searchFacade.albumResults$.subscribe(a => {
      console.log(a);
    });

    this.subscriptions.push(searchQuery$, al$);
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
