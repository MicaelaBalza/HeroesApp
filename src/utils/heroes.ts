import { HEROES } from '../data/heroes';
import { Hero, Publisher } from '../types';

export const getHeroById = (id: string): Hero | undefined => {
  return HEROES.find(hero => hero.id === id);
};

export const getHeroesByName = (name: string) => {
  return name !== '' ? HEROES.filter(hero => hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase())) : [];
};

export const getHeroesByPublisher = (publisher: Publisher): Hero[] => {
  return HEROES.filter(hero => hero.publisher === publisher);
};
