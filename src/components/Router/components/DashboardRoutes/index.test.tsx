import { createMemoryHistory } from 'history';

import { renderWithRouter } from 'utils/tests';
import { PATHS } from '../../constants';

import DashboardRoutes from '.';

describe('DashboardRoutes component', () => {
  const history = createMemoryHistory();
  it('should show Search Screen if path is /search', () => {
    history.push(PATHS.search);
    renderWithRouter(DashboardRoutes, history);

    expect(history.location.pathname).toBe(PATHS.search);
  });

  it('should show Marvel Screen when path does not match any route', () => {
    history.push('/testRoute');
    renderWithRouter(DashboardRoutes, history);
    
    expect(history.location.pathname).toBe(PATHS.home);
  });
});
