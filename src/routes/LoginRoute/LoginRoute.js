import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

function LoginRoute() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/');
  };

  return (
    <section id='login-page'>
      <h2 id='login-title'>Login</h2>
      <div id='demo-cred'>
        <b>DEMO</b>
        <br></br> Username: admin | Password: pass
      </div>
      <div className='login-body'>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </div>
    </section>
  );
}

export default LoginRoute;
