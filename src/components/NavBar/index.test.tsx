import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { NAV_LINKS } from './constants';
import NavBar from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('NavBar Component', () => {
  beforeEach(() => {
    render(<MemoryRouter initialEntries={['/marvel']}><NavBar /></MemoryRouter>);
  });

  it('should render correctly', () => {
    expect(screen.getByText('Heroes App')).toBeInTheDocument();
    expect(screen.getByText(NAV_LINKS[0].name)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Logout'})).toBeInTheDocument();
  });

  it('should navigate to login when clicking logout', () => {
    const logoutButton = screen.getByRole('button', { name: 'Logout'});
    userEvent.click(logoutButton);
    expect(mockNavigate).toBeCalledWith('/login', {'replace': true});
  });

  it('should show active NavLink correctly', () => {
    expect(screen.getByText(NAV_LINKS[0].name)).toHaveClass('active');
  });
});
