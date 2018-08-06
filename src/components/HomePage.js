import React from 'react';
import firebase from '../firebase/firebase';

import Header from './Header';

const HomePage = ({ logoutUser }) => {
  const user = firebase.auth().currentUser;
  let welcomeName = '';
  if (user && user.displayName) {
    welcomeName = user.displayName;
  } else if (user && user.email) {
    welcomeName = user.email.split('@')[0];
  }

  const headerActions = [
    <button key="logoutUser" onClick={logoutUser}>
      Log out
    </button>,
  ];

  return (
    <div>
      <Header title="Home" actions={headerActions} />
      <p>Welcome {welcomeName}</p>
    </div>
  );
};

export default HomePage;
