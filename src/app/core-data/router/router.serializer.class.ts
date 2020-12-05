import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {RouterStateSerializer} from '@ngrx/router-store';
import {IRouterState} from './router.reducer';

export class RouterSerializer implements RouterStateSerializer<IRouterState> {
  public serialize(routerState: RouterStateSnapshot): IRouterState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    return this.resolveStateData(route, routerState);
  }

  public resolveStateData(
    route: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot,
  ): IRouterState {
    return {
      url: route.url.length ? route.url[0].path : routerState.url,
      params: route.params,
    };
  }
}
