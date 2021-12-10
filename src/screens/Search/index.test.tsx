import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchScreen from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

describe('Search Screen', () => {
  it('should render correctly', () => {
    render(<MemoryRouter><SearchScreen /></MemoryRouter>);

    expect(screen.getByPlaceholderText('Find your hero...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('should render correctly with active search', () => {
    render(<MemoryRouter initialEntries={['/search?q=batman']}><SearchScreen /></MemoryRouter>);

    expect(screen.getByDisplayValue('batman')).toBeInTheDocument();
  });

  it('should show message if no hero is found', () => {
    render(<MemoryRouter initialEntries={['/search?q=test']}><SearchScreen /></MemoryRouter>);

    expect(screen.getByText('No heroes match test')).toBeInTheDocument();
  });

  it('should call navigate on search', () => {
    render(<MemoryRouter><SearchScreen /></MemoryRouter>);
    
    userEvent.type(screen.getByPlaceholderText('Find your hero...'), 'batman');
    userEvent.click(screen.getByRole('button', { name: 'Search' }));
    expect(mockNavigate).toBeCalledWith('?q=batman');
  });
})
