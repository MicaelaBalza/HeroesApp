import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import SearchScreen from '../components/search/SearchScreen';

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
