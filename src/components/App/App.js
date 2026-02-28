import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute';
import LearningRoute from '../../routes/LearningRoute/LearningRoute';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import './App.css';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <div className='App'>
        <Header />
        <main>
          {hasError && <p>There was an error! Oh no!</p>}
          <Switch>
            <Route exact path={'/'} component={DashboardRoute} />
            <Route path={'/learn'} component={LearningRoute} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}
