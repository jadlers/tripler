import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import * as routes from '../constants/routes';
import Header from './Header';

const LoginButton = (
  <Button key="loginButton" component={Link} to={routes.LOGIN} color="inherit">
    Login
  </Button>
);

const WelcomePage = () => {
  const headerActions = [LoginButton];

  return (
    <div>
      <Header title={'TripleR'} actions={headerActions} />
      <p>
        Welcome to TripleR which is short for reflect, record, and remember.
      </p>
      <p>
        The idea is that you’ll sit down about three to five minutes each day to
        reflect on how the day went. What was the highlight of the day? Did you
        acomplish what you planned on doing yesterday?
      </p>
      <p>Get started by signing in!</p>
    </div>
  );
};

export default WelcomePage;
