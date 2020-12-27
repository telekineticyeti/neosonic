import {OnDestroy, Component} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({template: ''})
export class AutoUnsubscribeAdapter implements OnDestroy {
  public subscribers: Subscription[] = [];

  public ngOnDestroy(): void {
    this.unsubscribeFromAll();
  }

  public unsubscribeFromAll(): void {
    this.subscribers.forEach(s => s.unsubscribe());
  }
}
