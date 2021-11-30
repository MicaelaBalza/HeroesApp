import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';

import { ActionTypes } from '../../auth/authReducer';

import './LoginScreen.css';

const LoginScreen = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const lastPath = localStorage.getItem('lastPath') || '/';
  const handleLogin = () => {
    dispatch({ type: ActionTypes.login, payload: { name: 'Fernando' } });
    history.replace(lastPath);
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default LoginScreen
