import { Hero } from './../utils/types';
import { heroes } from '../data/heroes';

export const getHeroById = (id: string): Hero | undefined => {

  return heroes.find(hero => hero.id === id);
}
