import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.css';

function Header() {
  const context = useContext(UserContext);

  const handleLogoutClick = () => {
    context.processLogout();
  };

  return (
    <header className="header">
      <h1 className="header-title">
        <Link className="header-link" to="/">
          Lango
        </Link>
      </h1>
      {TokenService.hasAuthToken() ? (
        <div className="user-info">
          <span className="username">{context.user.name}</span>
          <nav className="nav">
            <Link className="nav-link" onClick={handleLogoutClick} to="/login">
              Logout
            </Link>
          </nav>
        </div>
      ) : (
        <nav className="nav">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
