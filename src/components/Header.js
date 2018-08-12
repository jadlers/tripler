import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const StyledTypography = styled(Typography)`
  flex-grow: 1;
`;

const Header = ({ title, actions }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <StyledTypography variant="title" color="inherit">
        {title}
      </StyledTypography>
      {actions && actions.map(component => component)}
    </Toolbar>
  </AppBar>
);

export default Header;
