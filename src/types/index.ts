export type User = {
  name?: string;
  isLogged: boolean;
}

export enum Publisher {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics'
} 

export interface Hero {
  id: string,
  superhero: string,
  publisher: Publisher,
  alter_ego: string,
  first_appearance: string,
  characters: string
}
