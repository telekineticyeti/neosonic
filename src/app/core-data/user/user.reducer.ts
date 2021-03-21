import {Action, createReducer, on} from '@ngrx/store';
import {UserActions} from './user.actions';

export interface IUserState {
  user: {
    username: string;
    password: string;
    server: string;
  };
  loggedIn: boolean;
}

export const initialState: IUserState = {
  user: {
    username: '',
    password: '',
    server: '',
  },
  loggedIn: false,
};

const userReducer = createReducer(
  initialState,

  on(UserActions.saveSuccess, (state, {user}) => {
    return {...state, user, loggedIn: true};
  }),

  on(UserActions.loadSuccess, (state, {user}) => {
    return {...state, user, loggedIn: true};
  }),

  on(UserActions.clearSuccess, state => {
    return {
      ...state,
      user: {username: '', password: '', server: ''},
      loggedIn: false,
    };
  }),
);

export function UserReducer(
  state: IUserState | undefined,
  action: Action,
): IUserState {
  return userReducer(state, action);
}
