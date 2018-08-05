import React from 'react';
import { Link } from 'react-router-dom';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../firebase/firebase.js';
import firebaseui from 'firebaseui';

import * as routes from '../constants/routes.js';

const LoginPage = () => {
  const uiConfig = {
    // Redirect signin flow rather than popup flow.
    signInFlow: 'redirect',
    signInSuccessUrl: routes.START,
    // We will display Google and email + password as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  };

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <Link to={routes.START}>BACK</Link>
    </div>
  );
};

export default LoginPage;
