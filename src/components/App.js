import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from '../firebase/firebase.js';

import HomePage from './HomePage.js';
import LandingPage from './LandingPage.js';

class App extends Component {
  constructor(props) {
    super(props);
    const userToken = localStorage.getItem('userToken');

    this.state = {
      userToken,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        authUser
          .getIdToken()
          .then(userToken => {
            console.log(userToken);
            this.setState({ userToken });
            localStorage.setItem('userToken', userToken);
          })
          .catch(() => {
            this.setState({ ...this.state, userToken: null });
            localStorage.removeItem('userToken');
          });
      } else {
        localStorage.removeItem('userToken');
      }
    });
  }

  /**
   * Function responsible for showing the app in an signed in state.
   */
  userLoggedIn = () => (
    <Router>
      <div>
        <Route
          exact
          path="/"
          component={() => <HomePage firebase={firebase} />}
        />
      </div>
    </Router>
  );

  /**
   * Function responsible for showing the app when no user is signed in.
   * Including some information about the app and most importantly directs to
   * sign in.
   */
  noUser = () => (
    <LandingPage userToken={this.state.userToken} firebase={firebase} />
  );

  render() {
    if (!this.state.userToken) {
      return this.noUser();
    }

    return this.userLoggedIn();
  }
}

export default App;
