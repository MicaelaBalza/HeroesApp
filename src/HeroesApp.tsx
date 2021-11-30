import { useReducer, useEffect } from 'react';
import AuthContext from './auth/AuthContext';
import AppRouter from "./routers/AppRouter";
import { authReducer } from "./auth/authReducer";

const init = () => {
  const value = localStorage.getItem('user');
  if (typeof value === 'string') {
    return JSON.parse(value)
  } else {
    return { logged: false }
  }
}

const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])

  return (
    <div className="main-container">
      <AuthContext.Provider value={{ user, dispatch }}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  )
}

export default HeroesApp;
