import { Switch, Route, Redirect } from "react-router-dom";

import NavBar from 'components/NavBar';
import MarvelScreen from 'screens/Marvel';
import DcScreen from 'screens/Dc';
import HeroScreen from 'screens/HeroDetail';
import SearchScreen from 'screens/Search';

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="page-container">
        <Switch>
          <Route exact path="/marvel">
            <MarvelScreen />
          </Route>
          <Route exact path="/hero/:heroId">
            <HeroScreen />
          </Route>
          <Route exact path="/dc">
            <DcScreen />
          </Route>
          <Route exact path="/search">
            <SearchScreen />
          </Route>
          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}

export default DashboardRoutes;
