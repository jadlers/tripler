import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const ActionItems = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;

const Title = styled(Typography)`
  cursor: default;
`;

const Header = ({ title, actions }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Title variant="title" color="inherit">
        {title}
      </Title>
      <ActionItems>
        {actions && actions.map(component => component)}
      </ActionItems>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.element),
};

export default Header;
