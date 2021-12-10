import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoginScreen from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Login Screen', () => {
  it('should render correctly', () => {
    render(<MemoryRouter><LoginScreen /></MemoryRouter>);

    expect(screen.getByRole('heading', { name: 'Login'})).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login'})).toBeInTheDocument();
  });

  it('should call navigate on login', () => {
    render(<MemoryRouter><LoginScreen /></MemoryRouter>);

    userEvent.click(screen.getByRole('button', { name: 'Login'}));
    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true });
  });
});
