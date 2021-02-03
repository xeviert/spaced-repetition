import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section>
        <p className='login-reg-info'>
          Practice learning a language with the spaced reptition revision technique.
        </p>
        <h2>Sign up</h2>

        <div className='register-login-body'>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
        </div>

      </section>
    );
  }
}

export default RegistrationRoute
