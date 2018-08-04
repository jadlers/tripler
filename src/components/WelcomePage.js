import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import * as routes from '../constants/routes.js';

const WelcomePage = ({ userToken, firebase }) => {
  const uiConfig = {
    // Redirect signin flow rather than popup flow.
    signInFlow: 'redirect',
    // Redirect to /signedIn after sign in is successful. Alternatively you can
    // provide a callbacks.signInSuccess function.
    signInSuccessUrl: routes.START,
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };

  return (
    <div>
      <h1>TripleR</h1>
      <p>
        Welcome to TripleR which is short for reflect, record, and remember.
      </p>
      <p>
        The idea is that you’ll sit down about three to five minutes each day to
        reflect on how the day went. What was the highlight of the day? Did you
        acomplish what you planned on doing yesterday?
      </p>
      <p>Get started by signing in!</p>

      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default WelcomePage;
