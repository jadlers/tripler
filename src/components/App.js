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

  loginUser(authUser) {
    authUser
      .getIdToken()
      .then(userToken => {
        this.setState({ userToken });
        localStorage.setItem('userToken', userToken);
      })
      .catch(error => {
        console.log('Error getting user token:' + error);
        this.setState({ ...this.state, userToken: null });
        localStorage.removeItem('userToken');
      });
  }

  logoutUser() {
    firebase.auth().signOut();
    localStorage.removeItem('userToken');
    this.setState({ ...this.state, userToken: null });
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authUser => {
      if (authUser) {
        this.loginUser(authUser);
      } else {
        this.logoutUser();
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
          component={() => (
            <HomePage
              firebase={firebase}
              logoutUser={() => this.logoutUser()}
            />
          )}
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
