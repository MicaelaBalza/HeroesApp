import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import AuthContext from 'contexts/AuthContext';

import { PropsWithChildren } from 'types';

const PublicRoute = ({ children }: PropsWithChildren) => {
  const { user } = useContext(AuthContext);

  return user.isLogged
    ? <Navigate to="/" />
    : children;
};

export default PublicRoute;
