import MarvelScreen from 'screens/Marvel';
import DcScreen from 'screens/Dc';
import HeroScreen from 'screens/HeroDetail';
import SearchScreen from 'components/search/SearchScreen';

export const routes = {
  private: [
    {
      path: '/marvel',
      component: MarvelScreen,
    },
    {
      path: '/dc',
      component: DcScreen,
    },
    {
      path: '/hero/:heroId',
      component: HeroScreen,
    },
    {
      path: '/search',
      component: SearchScreen,
    }
  ],
  public: [
    {
      path: '/login',
      name: 'login',
    },
    {
      path: '/register',
      name: 'register',
    },
  ]
};
