import { User } from '../types/types'

export enum ActionTypes {
  login = '[Auth] Login',
  logout = '[Auth] Logout'
}

interface Login {
  type: ActionTypes.login;
  payload: Record<string, unknown>;
}

interface Logout {
  type: ActionTypes.logout;
}

type Action = Login | Logout;

export const authReducer = (state: User, action: Action) => {
  switch (action.type) {
    case ActionTypes.login:
      return {
        ...action.payload,
        logged: true
      };
    case ActionTypes.logout:
      return {
        logged: false
      };
    default:
      return state;
  }
}
