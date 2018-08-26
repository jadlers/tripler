import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import { ReactMic } from 'react-mic';
import Card from '@material-ui/core/Card';
import BaseButton from '@material-ui/core/ButtonBase';

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
    };
  }

  /**
   * Toggles the recording on and off.
   */
  toggleRecording = () => {
    const { record } = this.state;
    this.setState({ record: !record });
  };

  render() {
    const { record } = this.state;
    return (
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
            onStop={this.props.saveSource}
          />
        </StyledBaseButton>
      </StyledCard>
    );
  }
}

Recorder.propTypes = {
  saveSource: PropTypes.func,
};

export default Recorder;
