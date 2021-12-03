import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { heroes } from '../../data/heroes';

import HeroCard from '.';

describe('HeroCard component', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <HeroCard
          id={heroes[0].id}
          superhero={heroes[0].superhero}
          alter_ego={heroes[0].alter_ego}
          first_appearance={heroes[0].first_appearance}
          characters={heroes[0].characters}
        />
      </MemoryRouter>
    );
    expect(screen.getByRole('img', { name: heroes[0].superhero })).toBeInTheDocument();
    expect(screen.getByText(heroes[0].superhero)).toBeInTheDocument();
    expect(screen.getByText('Primera aparición')).toBeInTheDocument();
    expect(screen.getByText(heroes[0].first_appearance)).toBeInTheDocument();
    expect(screen.getByText('Personaje(s)')).toBeInTheDocument();
    expect(screen.getByText(heroes[0].characters)).toBeInTheDocument();
    expect(screen.getAllByText(heroes[0].characters)).toHaveLength(1);
  });

  it('should show alter ego if its different to characters', () => {
    render(
      <MemoryRouter>
        <HeroCard
          id={heroes[2].id}
          superhero={heroes[2].superhero}
          alter_ego={heroes[2].alter_ego}
          first_appearance={heroes[2].first_appearance}
          characters={heroes[2].characters}
        />
      </MemoryRouter>
    );
    expect(screen.getByText(heroes[2].alter_ego)).toBeInTheDocument();
  });
});
