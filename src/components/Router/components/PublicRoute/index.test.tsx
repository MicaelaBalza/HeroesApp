import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';

import { renderWithRouter } from 'utils/tests';

import PublicRoute from '.';

describe('PublicRoute component', () => {
  const history = createMemoryHistory();
  history.replace = jest.fn();
  
  it('should redirect if user is logged', () => {
    renderWithRouter(PublicRoute, history,{
      isAuthenticated: true,
      component: () => <div>Test Text</div>
    });
    expect(history.replace).toHaveBeenCalled();
  });

  it('should render component if user is not logged', () => {
    renderWithRouter(PublicRoute, history,{
      isAuthenticated: false,
      component: () => <div>Test Text</div>
    });
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });
});
