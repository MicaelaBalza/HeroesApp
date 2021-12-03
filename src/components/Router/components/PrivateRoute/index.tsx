import { Route, Redirect, RouteProps } from 'react-router-dom';

interface Props {
  isAuthenticated: boolean;
  component: React.ComponentType;
}

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest}: Props & RouteProps) => {
  localStorage.setItem('lastPath', `${rest.location?.pathname}${rest.location?.search}`);
  return (
    <Route {...rest}
      component={(props: any) => (
        isAuthenticated ? (
          <Component {...props}/>
        ) : (
          <Redirect to="/login" />
        )
      )}
    />
  );
};

export default PrivateRoute;
