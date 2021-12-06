import { authReducer } from './reducer';

describe('AuthReducer tests', () => {
  it('should return initial State', () => {
    expect(authReducer(undefined, {})).toEqual({});
  });
})
