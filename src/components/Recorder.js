import React, { Component } from 'react';
import { ReactMic } from 'react-mic';
import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import BaseButton from '@material-ui/core/ButtonBase';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowRounded from '@material-ui/icons/PlayArrowRounded';

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  margin: 0.5em;
  padding: 0.8em;
`;

const StyledBaseButton = styled(BaseButton)`
  display: flex;
  justify-content: center;
  box-shadow: #333 0 0 1em;
  transition: box-shadow 300ms;

  &:hover {
    box-shadow: #3f51b5 0 0 1.5em;
  }
`;

const StyledMic = styled(ReactMic)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      record: false,
      audioUrl: null,
    };
  }

  /**
   * Toggles the recording on and off.
   */
  toggleRecording = () => {
    const { record } = this.state;
    this.setState({ record: !record });
  };

  /**
   * Saves the URL to the recording in the components state
   * @param {Object} recorded Audio blob with the made recording
   */
  onStop = recorded => {
    this.setState({ audioUrl: recorded.blobURL });
  };

  /**
   * Plays the most recent recording made.
   */
  playRecording = () => {
    const { audioUrl } = this.state;
    if (!audioUrl) return;

    const audio = new Audio(this.state.audioUrl);
    audio.play();
  };

  render() {
    const { record, audioUrl } = this.state;
    return (
      <div>
        <StyledCard>
          <StyledBaseButton
            style={{ borderRadius: '50%' }}
            onClick={this.toggleRecording}
            focusRipple
          >
            <StyledMic
              record={record}
              backgroundColor="#eee"
              strokeColor="#3f51b5"
              onStop={this.onStop}
            />
          </StyledBaseButton>
        </StyledCard>
        <StyledCard>
          <IconButton disabled={!audioUrl} onClick={this.playRecording}>
            <PlayArrowRounded />
          </IconButton>
          Here will be a player
        </StyledCard>
      </div>
    );
  }
}

export default Recorder;
