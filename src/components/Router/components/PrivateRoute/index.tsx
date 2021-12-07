import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import AuthContext from 'contexts/AuthContext';

import { PropsWithChildren } from 'types';

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { pathname, search } = useLocation();
  localStorage.setItem('lastPath', `${pathname}${search}`);

  const { user } = useContext(AuthContext);

  return user.isLogged
    ? children
    : <Navigate to="/login"/>;
};

export default PrivateRoute;
