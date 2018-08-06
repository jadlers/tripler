import React from 'react';
import firebase from '../firebase/firebase';

const HomePage = ({ logoutUser }) => {
  const user = firebase.auth().currentUser;
  let welcomeName = '';
  if (user && user.displayName) {
    welcomeName = user.displayName;
  } else if (user && user.email) {
    welcomeName = user.email.split('@')[0];
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logoutUser}>Log out</button>
      <p>Welcome {welcomeName}</p>
    </div>
  );
};

export default HomePage;
