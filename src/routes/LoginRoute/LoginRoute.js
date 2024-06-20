import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

function LoginRoute() {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/');
  };

  return (
    <section>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </section>
  );
}

export default LoginRoute;
