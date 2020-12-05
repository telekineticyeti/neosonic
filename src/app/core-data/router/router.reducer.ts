import {Params} from '@angular/router';

export interface IRouterState {
  url: string;
  params: Params;
}

export const routerInitialState = {
  router: {
    state: {
      url: window.location.pathname,
      params: {},
    },
    navigationId: 0,
  },
};
