import { Route, Redirect, RouteProps } from 'react-router-dom';

interface Props {
  isAuthenticated: boolean;
  component: React.ComponentType;
}

const PublicRoute = ({ isAuthenticated, component: Component, ...rest}: Props & RouteProps) => {

  return (
    <Route {...rest}
      component={(props: any) => (
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      )}
    />
  )
}

export default PublicRoute;
