import {RouterReducerState} from '@ngrx/router-store';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IRouterState} from './router.reducer';

const selectRouter = createFeatureSelector<RouterReducerState<IRouterState>>(
  'router',
);

export const RouterSelectors = {
  state: createSelector(
    selectRouter,
    (state: RouterReducerState<IRouterState>) => state.state,
  ),
  params: createSelector(
    selectRouter,
    (state: RouterReducerState<IRouterState>) => state.state.params,
  ),

  url: createSelector(
    selectRouter,
    (state: RouterReducerState<IRouterState>) => state.state.url,
  ),
};
