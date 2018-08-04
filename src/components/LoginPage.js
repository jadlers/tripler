import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import * as routes from '../constants/routes.js';

const LoginPage = ({ firebase }) => {
  const uiConfig = {
    // Redirect signin flow rather than popup flow.
    signInFlow: 'redirect',
    signInSuccessUrl: routes.START,
    // We will display Google and email + password as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
};

export default LoginPage;
