import { Hero, Publisher } from '../types';
import { heroes } from '../data/heroes';

export const getHeroById = (id: string): Hero | undefined => {
  return heroes.find(hero => hero.id === id);
}

export const getHeroesByName = (name: string) => {
  return name !== '' ? heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase())) : [];
}

export const getHeroesByPublisher = (publisher: Publisher): Hero[] => {
  return heroes.filter(hero => hero.publisher === publisher);
}
