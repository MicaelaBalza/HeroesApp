import MarvelScreen from 'screens/Marvel';
import DcScreen from 'screens/Dc';
import HeroScreen from 'screens/HeroDetail';
import SearchScreen from 'screens/Search';

export const PATHS = {
  home: '/marvel',
  marvel: '/marvel',
  dc: '/dc',
  hero: '/hero/:id',
  search: '/search',
  login: '/login',
  register: '/register'
};

export const ROUTES = {
  private: [
    {
      path: PATHS.marvel,
      component: MarvelScreen,
    },
    {
      path: PATHS.dc,
      component: DcScreen,
    },
    {
      path: PATHS.hero,
      component: HeroScreen,
    },
    {
      path: PATHS.search,
      component: SearchScreen,
    }
  ],
  public: [
    {
      path: PATHS.login,
      name: 'login',
    },
    {
      path: PATHS.register,
      name: 'register',
    },
  ]
};
