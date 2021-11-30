import { heroes } from '../data/heroes';

export const getHeroesByName = (name: string) => {
  return name !== '' ? heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name.toLocaleLowerCase())) : [];
}
