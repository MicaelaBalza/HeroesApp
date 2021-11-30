import { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AuthContext from 'src/auth/AuthContext';
import Login from '../components/login/LoginScreen';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
  const { user: { logged } } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute path="/login" component={Login} isAuthenticated={logged} />
          <PrivateRoute path="/" component={DashboardRoutes} isAuthenticated={logged} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter
