import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import MarvelScreen from '.';

describe('DC Screen', () => {
  it('should render correctly', () => {
    render(<MemoryRouter><MarvelScreen /></MemoryRouter>);

    expect(screen.getByText('Spider Man')).toBeInTheDocument();
  })
})
