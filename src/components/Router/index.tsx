import { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import AuthContext from 'contexts/AuthContext';
import Login from 'screens/Login';
import PublicRoute from 'components/Router/components/PublicRoute';
import PrivateRoute from 'components/Router/components/PrivateRoute';
import DashboardRoutes from 'components/Router/components/DashboardRoutes';

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
};

export default AppRouter;
