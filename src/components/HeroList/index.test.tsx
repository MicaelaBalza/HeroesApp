import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { getHeroesByPublisher } from 'utils/heroes';
import { Publisher } from 'types';

import HeroList from '.';

const filteredHeroes = getHeroesByPublisher(Publisher.DCComics);

describe('HeroList component', () => {
  it('should render correctly', () => {
    render(
      <HeroList publisher={Publisher.DCComics}/>,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByText(filteredHeroes[0].superhero)).toBeInTheDocument();
  });
});
