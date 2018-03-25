import React from 'react';
import { Navigation } from '../Navigation';
import './header.scss';

const Heading = () => <h1>Here is the heading!</h1>;

export const Header = () => (
  <div id="header">
    <Heading />
    <Navigation islogin />
  </div>
);
