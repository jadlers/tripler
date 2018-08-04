import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = ({ authUser }) => {
  return (
    <ul>
      <li>
        <Link to={routes.HOME}>Home</Link>
      </li>
      {authUser === null ? (
        <li>
          <Link to={routes.LOGIN}>Login</Link>
        </li>
      ) : (
        <li onClick={() => console.log(authUser)}>Log out</li>
      )}
    </ul>
  );
};

export default Navigation;
