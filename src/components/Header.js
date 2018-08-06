import React from 'react';
import styled from 'styled-components';

const TopBar = styled.div`
  display: flex;
  padding: 0.5em 1em;
  background: #00bcd4;
  box-shadow: 0 1px 4px 1px;
  margin: 0;
  border-radius: 0 0 0.5em 0.5em;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.7em;
  padding: 0.4em 0;
  color: white;
`;

const Actions = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`;

const Header = ({ title, actions }) => (
  <TopBar>
    <Title>{title}</Title>
    <Actions>{actions && actions.map(component => component)}</Actions>
  </TopBar>
);

export default Header;
