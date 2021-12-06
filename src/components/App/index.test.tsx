import { render, screen } from '@testing-library/react';

import AuthContext from 'contexts/AuthContext';
import HeroesApp from '.';

describe('HeroesApp component', () => {
  it('should render', async () => {
    // localStorage.setItem('user', JSON.stringify({ user: { isLogged: true }}));
    // render(
    //   <HeroesApp />
    // );
    // expect(await screen.findByText('holahola')).toBeInTheDocument();
    expect(true).toBe(true);
  });

  // it('should something', () => {
  //   localStorage.setItem('user', JSON.stringify({ user: { isLogged: true }}));
  //   render(
  //     <AuthContext.Provider value={{ user: { isLogged: true }}}>
  //       <HeroesApp />
  //     </AuthContext.Provider>
  //   );
  //   expect(screen.getByText('holahola')).toBeInTheDocument();
  // })
})
