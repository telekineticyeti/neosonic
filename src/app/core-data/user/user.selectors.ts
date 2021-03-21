import {createSelector} from '@ngrx/store';
import {State} from '../core-data.reducer';
import {IUserState} from './user.reducer';

const selectState = (state: State) => state.user;

// tslint:disable-next-line: variable-name
export const UserSelectors = {
  user: createSelector(selectState, (state: IUserState) => state.user),
  loggedIn: createSelector(selectState, (state: IUserState) => state.loggedIn),
};
