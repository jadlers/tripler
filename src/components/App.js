import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from '../firebase/firebase';
import * as routes from '../constants/routes';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';

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
        console.log(`Error getting user token: ${error}`);
        this.setState({ userToken: null });
        localStorage.removeItem('userToken');
      });
  }

  logoutUser() {
    firebase.auth().signOut();
    localStorage.removeItem('userToken');
    this.setState({ userToken: null });
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
   * @returns {JSX} Application in a signed in state
   */
  userLoggedIn = () => (
    <Router>
      <HomePage logoutUser={() => this.logoutUser()} />
    </Router>
  );

  /**
   * Function responsible for showing the app when no user is signed in.
   * Including some information about the app and most importantly directs to
   * sign in.
   * @returns {JSX} Application in signed out state
   */
  noUser = () => (
    <Router>
      <Switch>
        <Route path={routes.LOGIN} component={() => <LoginPage />} />
        <Route path={routes.START} component={() => <WelcomePage />} />
      </Switch>
    </Router>
  );

  render() {
    if (!this.state.userToken) {
      return this.noUser();
    }

    return this.userLoggedIn();
  }
}

export default App;
