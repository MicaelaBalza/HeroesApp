import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import AuthContext from 'contexts/AuthContext';
import { ActionTypes } from 'contexts/AuthContext/reducer';

import { NAV_LINKS } from './constants';

import './index.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: ActionTypes.Logout });
    localStorage.removeItem('user');
    navigate('/login', { replace: true });
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Heroes App
      </Link>
      <div className="navbar-menu">
        <div className="menu-left">
          {NAV_LINKS.map(navLink => (
            <NavLink
              to={navLink.path}
              key={navLink.name}
              className={ ({ isActive }) => 'menu-link' + (isActive && ' active') }
            >
              {navLink.name}
            </NavLink>
          ))}
        </div>
        <div className="menu-right">
          <p className="username">Hola {user.name}!</p>
          <button className="menu-link" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
