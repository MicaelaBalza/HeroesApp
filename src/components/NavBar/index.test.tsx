import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

import { renderWithRouter } from 'utils/tests';
import { NAV_LINKS } from './constants';

import NavBar from '.';

describe('NavBar Component', () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    renderWithRouter(NavBar, history);
  });

  it('should render correctly', () => {
    expect(screen.getByText('Heroes App')).toBeInTheDocument();
    expect(screen.getByText(NAV_LINKS[0].name)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Logout'})).toBeInTheDocument();
  });

  it('should navigate to login when clicking logout', () => {
    const logoutButton = screen.getByRole('button', { name: 'Logout'});
    userEvent.click(logoutButton);
    expect(history.location.pathname).toBe('/login');
  });
});
