import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import NavBar from '.';

import { NAV_LINKS } from './constants';

describe('NavBar Component', () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router history={history}>
        <NavBar />
      </Router>
    );
  });

  it('should render correctly', () => {
    expect(screen.getByText('Heroes App')).toBeInTheDocument();
    expect(screen.getByText(NAV_LINKS[0].name)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Logout'})).toBeInTheDocument();
  });

  it('should navigate to login when clicking logout', () => {
    const logoutButton = screen.getByRole('button', { name: 'Logout'});
    expect(logoutButton).toBeInTheDocument();
    userEvent.click(logoutButton);
    expect(history.location.pathname).toBe('/login');
  });
});
