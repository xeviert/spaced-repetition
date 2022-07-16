import React, { useContext, useState } from 'react';
import { Label, Input } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';

// !!!!!!!!!!!!!!!!!!!--------------------!!!!!!!!!!!!!!!!!!!!!
// This still needs to remove the error when login is successful
// !!!!!!!!!!!!!!!!!!!--------------------!!!!!!!!!!!!!!!!!!!!!

function LoginForm() {
  const [error, setError] = useState(null);
  const context = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    setError(null);

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = '';
        password.value = '';
        context.processLogin(res.authToken);
      })
      .catch((res) => {
        setError({ error: res.error });
      });
  };

  return (
    <div id='login-body'>
      <form className='LoginForm' onSubmit={handleSubmit}>
        <div role='alert'>{error && <p>{error}</p>}</div>
        <div>
          <Label htmlFor='login-username-input' id='login-username-label'>
            Username
          </Label>
          <Input
            id='login-username-input'
            type='text'
            name='username'
            required
          />
        </div>
        <div>
          <Label htmlFor='login-password-input' id='login-username-label'>
            Password
          </Label>
          <Input
            id='login-password-input'
            name='password'
            type='password'
            required
          />
        </div>

        <div id='footer'>
          <Button type='submit' id='login-btn'>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
