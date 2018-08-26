import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import PlayArrowRounded from '@material-ui/icons/PlayArrowRounded';

/**
 * Play the source passed as audio
 * @param {string} source An audio source
 */
const playRecording = source => {
  if (!source) return;

  const audio = new Audio(source);
  audio.play();
};

const AudioRecorder = ({ source }) => (
  <IconButton disabled={!source} onClick={() => playRecording(source)}>
    <PlayArrowRounded />
  </IconButton>
);

AudioRecorder.propTypes = {
  source: PropTypes.string,
};

export default AudioRecorder;
