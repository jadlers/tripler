import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './HomePage.js';
import LoginPage from './LoginPage.js';
import Navigation from './Navigation.js';
import LandingPage from './LandingPage.js';

import * as routes from '../constants/routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <hr />

          <Route
            exact
            path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route exact path={routes.HOME} component={() => <HomePage />} />
          <Route exact path={routes.LOGIN} component={() => <LoginPage />} />
        </div>
      </Router>
    );
  }
}

export default App;
