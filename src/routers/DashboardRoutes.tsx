import { Switch, Route, Redirect } from "react-router-dom";

import NavBar from '../components/ui/NavBar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import SearchScreen from '../components/search/SearchScreen';

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
