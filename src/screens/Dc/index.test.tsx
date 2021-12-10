import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import DcScreen from '.';

describe('DC Screen', () => {
  it('should render correctly', () => {
    render(<MemoryRouter><DcScreen /></MemoryRouter>);

    expect(screen.getByText('Batman')).toBeInTheDocument();
  })
})
