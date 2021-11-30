import { useReducer, useEffect } from 'react';
import AuthContext from 'contexts/AuthContext';
import AppRouter from 'components/Router';
import { authReducer } from 'contexts/AuthContext/reducer';

const init = () => {
  const value = localStorage.getItem('user');
  if (typeof value === 'string') {
    return JSON.parse(value);
  }
  return { logged: false };
};

const HeroesApp = function () {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <div className="main-container">
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
};

export default HeroesApp;
