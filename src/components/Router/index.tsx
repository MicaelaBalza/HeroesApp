import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthContext from 'contexts/AuthContext';

import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import DashboardRoutes from 'components/Router/components/DashboardRoutes';
import Login from 'screens/Login';

const AppRouter = () => {
  const { user: { isLogged } } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
          <Route path="/*" element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
