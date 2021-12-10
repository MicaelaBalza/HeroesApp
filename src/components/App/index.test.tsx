import { render, screen } from '@testing-library/react';

import HeroesApp from '.';

describe('HeroesApp component', () => {
  it('should render correctly with no logged user', () => {
    const spy = jest.spyOn(window.localStorage.__proto__, 'setItem');
    render(
      <HeroesApp />
    );

    expect(localStorage.setItem).toHaveBeenLastCalledWith('user', '{"isLogged":false}');
    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument();
    
    spy.mockReset();
    spy.mockRestore();
  });

  it('should render correctly with logged user', async () => {
    window.localStorage.setItem('user', JSON.stringify({ name: 'Test', isLogged: true }));
    render(<HeroesApp />);

    expect(screen.getByRole('link', { name: 'Heroes App' })).toBeInTheDocument();
  });
});
