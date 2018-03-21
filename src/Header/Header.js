import React from 'react';
import { Navigation } from "../Navigation";
import './header.scss'

const Heading = () => <h1>Here's the heading!</h1>;

export const Header = () => (
  <React.Fragment>
    <Heading />
    <Navigation />
  </React.Fragment>
);