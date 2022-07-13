import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || '/';
    history.push(destination);
  };

  render() {
    return (
      <section id='login-page'>
        <h2 id='login-title'>Login</h2>
        <div id='demo-cred'>
          <b>DEMO</b>
          <br></br> Username: admin | Password: pass
        </div>
        <div className='login-body'>
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
        </div>
      </section>
    );
  }
}

export default LoginRoute;
