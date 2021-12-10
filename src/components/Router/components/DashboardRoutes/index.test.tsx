import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import DashboardRoutes from '.';

describe('DashboardRoutes component', () => {
  it('should show Search Screen if path is /search', () => {
    render(<MemoryRouter initialEntries={['/search']}><DashboardRoutes/></MemoryRouter>);
    
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });
});
