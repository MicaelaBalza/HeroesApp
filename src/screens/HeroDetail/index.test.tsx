import { MemoryRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { HEROES } from 'data/heroes';
import HeroScreen from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('DC Screen', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter initialEntries={[`/hero/${HEROES[0].id}`]}>
        <Routes>
          <Route path="/hero/:id" element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(HEROES[0].superhero)).toBeInTheDocument();
  });

  it('should navigate to publisher page on back click if history length is less than 3', () => {
    render(
      <MemoryRouter initialEntries={[`/hero/${HEROES[0].id}`]}>
        <Routes>
          <Route path="/hero/:id" element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>
    );

    userEvent.click(screen.getByRole('button', { name: 'Volver' }));
    expect(mockNavigate).toHaveBeenCalledWith('/dc');
  });

  it('should navigate to previous page on back click', () => {
    window.history.pushState({}, '', '/dc');
    window.history.pushState({}, '', '/marvel');
    window.history.pushState({}, '', '/search');
    window.history.pushState({}, '', `/hero/${HEROES[0].id}`);
    render(
      <Router>
        <Routes>
          <Route path="/hero/:id" element={<HeroScreen />} />
        </Routes>
      </Router>
    );

    userEvent.click(screen.getByRole('button', { name: 'Volver' }));
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  it('should not show Hero Detail screen if no hero', () => {
    render(
      <MemoryRouter initialEntries={['/hero/test-hero']}>
        <Routes>
          <Route path="/hero/:id" element={<HeroScreen />} />
          <Route path="/" element={<h1>No Hero</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('No Hero')).toBeInTheDocument();
  });
});
