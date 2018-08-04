import React from 'react';

const HomePage = ({ logoutUser, firebase }) => {
  const user = firebase.auth().currentUser;

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logoutUser}>Log out</button>
      <p>Welcome {user && user.displayName}!</p>
    </div>
  );
};

export default HomePage;
