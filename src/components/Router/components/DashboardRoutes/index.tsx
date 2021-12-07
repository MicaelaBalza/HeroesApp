import { Routes, Route } from 'react-router-dom';

import NavBar from 'components/NavBar';
import MarvelScreen from 'screens/Marvel';

import { ROUTES } from '../../constants';

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="page-container">
        <Routes>
          {ROUTES.private.map(({ path, component: Component}) => (
            <Route path={path} key={path} element={<Component />} />
          ))}
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
