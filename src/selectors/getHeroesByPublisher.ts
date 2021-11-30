import { heroes } from '../data/heroes';

import { Publisher, Hero } from '../utils/types';

export const getHeroesByPublisher = (publisher: Publisher): Hero[] => {
  return heroes.filter(hero => hero.publisher === publisher);
}
