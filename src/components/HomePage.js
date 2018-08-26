import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ExitToAppRounded from '@material-ui/icons/ExitToAppRounded';
import IconButton from '@material-ui/core/IconButton';

import firebase from '../firebase/firebase';
import Header from './Header';
import Recorder from './Recorder';
import AudioPlayer from './AudioPlayer';

const StyledCard = styled(Card)`
  margin: 0.5em;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      audioSource: null,
    };
  }

  logoutAction = (
    <IconButton
      onClick={this.props.logoutUser}
      key="logoutUser"
      color="inherit"
    >
      <ExitToAppRounded />
    </IconButton>
  );

  /**
   * Save the audioURL from a blob as the new audioUrl
   * @param {Object} blob including information about the recording
   */
  saveSource = blob => {
    this.setState({ audioSource: blob.blobURL });
  };

  render() {
    const user = firebase.auth().currentUser;
    let welcomeName = '';
    if (user && user.displayName) {
      welcomeName = user.displayName;
    } else if (user && user.email) {
      welcomeName = user.email.split('@')[0];
    }

    const headerActions = [this.logoutAction];

    return (
      <div>
        <Header title="Home" actions={headerActions} />
        <StyledCard>
          <CardContent>Welcome {welcomeName}</CardContent>
        </StyledCard>
        <Recorder saveSource={this.saveSource} />
        <AudioPlayer source={this.state.audioSource} />
      </div>
    );
  }
}

HomePage.propTypes = {
  logoutUser: PropTypes.func,
};

export default HomePage;
