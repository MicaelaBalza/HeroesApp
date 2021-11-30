import { createContext } from 'react';

import { User } from 'types';

const initialState: User = {
  name: '',
  logged: false,
};

const AuthContext = createContext<{user: User, dispatch: React.Dispatch<any>}>({
  user: initialState,
  dispatch: () => null,
});

export default AuthContext;
