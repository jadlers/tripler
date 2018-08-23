import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ExitToAppRounded from '@material-ui/icons/ExitToAppRounded';
import IconButton from '@material-ui/core/IconButton';

import firebase from '../firebase/firebase';
import Header from './Header';

const StyledCard = styled(Card)`
  margin: 0.5em;
`;

const HomePage = ({ logoutUser }) => {
  const user = firebase.auth().currentUser;
  let welcomeName = '';
  if (user && user.displayName) {
    welcomeName = user.displayName;
  } else if (user && user.email) {
    welcomeName = user.email.split('@')[0];
  }

  const logoutAction = (
    <IconButton onClick={logoutUser} key="logoutUser" color="inherit">
      <ExitToAppRounded />
    </IconButton>
  );

  const headerActions = [logoutAction];

  return (
    <div>
      <Header title="Home" actions={headerActions} />
      <StyledCard>
        <CardContent>Welcome {welcomeName}</CardContent>
      </StyledCard>
    </div>
  );
};

HomePage.propTypes = {
  logoutUser: PropTypes.func,
};

export default HomePage;
