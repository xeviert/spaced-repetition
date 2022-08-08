import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, Required, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import Button from '../Button/Button';
import './RegistrationForm.css';
import UserContext from '../../contexts/UserContext';

function RegistrationForm() {
  const [error, setError] = useState(null);
  const context = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, username, password } = e.target;
    await AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    }).catch((res) => {
      setError({ error: res.error });
    });

    await AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        name.value = '';
        username.value = '';
        password.value = '';
        context.processLogin(res.authToken);
        navigate('/');
      })
      .catch((res) => {
        setError({ error: res.error });
      });
  };

  return (
    <div id='signup-body'>
      <form onSubmit={handleSubmit}>
        <div role='alert'>{error && <p>{error}</p>}</div>

        <div>
          <Label htmlFor='registration-name-input' id='registration-label'>
            Enter your name
            <Required />
          </Label>
          <Input
            id='registration-name-input'
            name='name'
            required
          />
        </div>
        <div>
          <Label htmlFor='registration-username-input' id='registration-label'>
            Choose a username
            <Required />
          </Label>
          <Input id='registration-username-input' name='username' required />
        </div>
        <div>
          <Label htmlFor='registration-password-input' id='registration-label'>
            Choose a password
            <Required />
          </Label>
          <Input
            id='registration-password-input'
            name='password'
            type='password'
            required
          />
        </div>

        <footer id='footer'>
          <div>
            <Button type='submit' id='registration-btn'>
              Sign up
            </Button>{' '}
            <br />
            <Link id='login-link' to='/login'>
              Already have an account?
            </Link>
          </div>
        </footer>
      </form>
    </div>
  );
}

export default RegistrationForm;
