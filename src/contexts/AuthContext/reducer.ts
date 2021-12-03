import { User } from 'types';

export enum ActionTypes {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout'
}

interface Login {
  type: ActionTypes.Login;
  payload: Record<string, unknown>;
}

interface Logout {
  type: ActionTypes.Logout;
}

export type Action = Login | Logout;

export const authReducer = (state: User, action: Action) => {
  switch (action.type) {
  case ActionTypes.Login:
    return {
      ...action.payload,
      logged: true
    };
  case ActionTypes.Logout:
    return {
      logged: false
    };
  default:
    return state;
  }
};
