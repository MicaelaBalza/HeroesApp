import { authReducer, ActionTypes } from './reducer';

describe('AuthReducer tests', () => {
  it('should return initial State', () => {
    const state = authReducer({ isLogged: false }, {});
    expect(state).toEqual({ isLogged: false });
  });

  it('should login user and return correct state', () => {
    const state = authReducer({ isLogged: false }, { type: ActionTypes.Login, payload: { name: 'Test' } });
    expect(state).toEqual({ name: 'Test', isLogged: true });
  });

  it('should logout user and return correct state', () => {
    const state = authReducer({ isLogged: true, name: 'Test' }, { type: ActionTypes.Logout });
    expect(state).toEqual({ isLogged: false });
  });
});
