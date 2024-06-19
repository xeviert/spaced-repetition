import React, { useContext, useState } from 'react';
import { Label, Input } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import '../../styling/loginForm.css';

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
    <div className='login-body'>
      <div className='login-card'>
        <form className='login-form' onSubmit={handleSubmit}>
          <div className='demo-cred'>
            <b>DEMO</b>
            <br /> Username: admin | Password: pass
          </div>
          <div role='alert'>{error && <p>{error}</p>}</div>
          <div>
            <Label htmlFor='login-username-input' className='login-username-label'>
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
            <Label htmlFor='login-password-input' className='login-password-label'>
              Password
            </Label>
            <Input
              id='login-password-input'
              name='password'
              type='password'
              required
            />
          </div>

          <Button type='submit' className='login-btn'>
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;
