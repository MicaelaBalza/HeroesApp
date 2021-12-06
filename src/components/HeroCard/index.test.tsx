import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { HEROES } from 'data/heroes';

import HeroCard from '.';

describe('HeroCard component', () => {
  it('should render correctly', () => {
    render(
      <HeroCard
        id={HEROES[0].id}
        superhero={HEROES[0].superhero}
        alter_ego={HEROES[0].alter_ego}
        first_appearance={HEROES[0].first_appearance}
        characters={HEROES[0].characters}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByRole('img', { name: HEROES[0].superhero })).toBeInTheDocument();
    expect(screen.getByText(HEROES[0].superhero)).toBeInTheDocument();
    expect(screen.getByText('Primera aparición')).toBeInTheDocument();
    expect(screen.getByText(HEROES[0].first_appearance)).toBeInTheDocument();
    expect(screen.getByText('Personaje(s)')).toBeInTheDocument();
    expect(screen.getByText(HEROES[0].characters)).toBeInTheDocument();
    expect(screen.getAllByText(HEROES[0].characters)).toHaveLength(1);
  });

  it('should show alter ego if its different to characters', () => {
    render(
      <HeroCard
        id={HEROES[2].id}
        superhero={HEROES[2].superhero}
        alter_ego={HEROES[2].alter_ego}
        first_appearance={HEROES[2].first_appearance}
        characters={HEROES[2].characters}
      />,
      { wrapper: MemoryRouter }
    );
    expect(screen.getByText(HEROES[2].alter_ego)).toBeInTheDocument();
  });
});
