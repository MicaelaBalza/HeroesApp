import { createContext } from 'react';

import { User } from 'types';
import { Action } from 'contexts/AuthContext/reducer';

const initialState: User = {
  name: '',
  logged: false,
};

const AuthContext = createContext<{user: User, dispatch: React.Dispatch<Action>}>({
  user: initialState,
  dispatch: () => null,
});

export default AuthContext;
