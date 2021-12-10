import { render, screen } from '@testing-library/react';

import AuthContext from 'contexts/AuthContext';
import AppRouter from '.';

describe('AppRouter component', () => {
  it('should render login screen if user is not logged', () => {
    render(
      <AuthContext.Provider value={{ user: { isLogged: false }}}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument();
  });

  it('should render home screen if user is logged', () => {
    render(
      <AuthContext.Provider value={{ user: { isLogged: true, name: 'Test' }}}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(screen.getByText('Heroes App')).toBeInTheDocument();
    expect(screen.getByText(/Test/)).toBeInTheDocument();
  });
});
