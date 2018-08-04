import React from 'react';

const HomePage = ({ loggedIn, firebase }) => {
  console.log('Got to homepage');

  // const { currentUser } = firebase.auth();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => firebase.auth().signOut()}>Log out</button>
      <p>Welcome!</p>
    </div>
  );
};

export default HomePage;
