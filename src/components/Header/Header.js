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

  const renderLogoutLink = () => {
    return (
      <div>
        <span id='username'>{context.user.name}</span>
        <nav>
          <Link className='link' onClick={handleLogoutClick} to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    );
  };

  const renderLoginLink = () => {
    return (
      <nav>
        <Link className='link' to='/login'>
          Login
        </Link>{' '}
        <Link className='link' to='/register'>
          Sign up
        </Link>
      </nav>
    );
  };

  return (
    <header>
      <h1>
        <Link className='header-name' to='/'>
          Italo
        </Link>
      </h1>
      {TokenService.hasAuthToken() ? renderLogoutLink() : renderLoginLink()}
    </header>
  );
}

export default Header;
