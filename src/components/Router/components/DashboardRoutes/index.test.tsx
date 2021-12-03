import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';

import { PATHS } from '../../constants';

import DashboardRoutes from '.';

describe('DashboardRoutes component', () => {
  const history = createMemoryHistory();
  it('should show Search Screen if path is /search', () => {
    history.push(PATHS.search);
    render(
      <Router history={history}>
        <DashboardRoutes />
      </Router>
    );
    expect(history.location.pathname).toBe(PATHS.search);
  });

  it('should show Marvel Screen when path does not match any route', () => {
    history.push('/testRoute');
    render(
      <Router history={history}>
        <DashboardRoutes />
      </Router>
    );
    expect(history.location.pathname).toBe(PATHS.home);
  });
});
