import { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';

import AuthContext from 'contexts/AuthContext';
import { ActionTypes } from 'contexts/AuthContext/reducer';

import { NAV_LINKS } from './constants';

import './index.css';

const Navbar = () => {
  const history = useHistory();
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: ActionTypes.Logout });
    localStorage.removeItem('user');
    history.push('/login');
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
              key={navLink.name}
              to={navLink.path}
              exact
              className="menu-link"
              activeClassName="active"
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
