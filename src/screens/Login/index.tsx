import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import { ActionTypes } from 'contexts/AuthContext/reducer';

import './index.css';

const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    const lastPath = localStorage.getItem('lastPath') || '/';
    dispatch({ type: ActionTypes.Login, payload: { name: 'Mica' } });
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
