import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

function RegistrationRoute() {
  const navigate = useNavigate();

  const handleRegistrationSuccess = () => {
    navigate('/login');
  };

  return (
    <section>
      <p className='login-reg-info'>
        Practice learning Italian with the spaced repetition revision technique.
      </p>
      <h2 id='register-title'>Sign up</h2>

      <div className='register-login-body'>
        <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
      </div>
    </section>
  );
}

export default RegistrationRoute;
