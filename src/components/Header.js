import React from 'react';

const Header = ({ title, actions }) => (
  <div>
    <h1>{title}</h1>
    {actions && actions.map(component => component)}
  </div>
);

export default Header;
