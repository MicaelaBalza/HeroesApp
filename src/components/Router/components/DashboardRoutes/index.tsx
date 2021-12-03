import { Switch, Route, Redirect } from 'react-router-dom';

import NavBar from 'components/NavBar';

import { ROUTES } from '../../constants';

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="page-container">
        <Switch>
          {ROUTES.private.map(({ path, component: Component}) => (
            <Route exact path={path} key={path}>
              <Component />
            </Route>
          ))}
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
