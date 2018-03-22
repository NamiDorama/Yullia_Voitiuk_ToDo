import React from 'react';
import { Aside } from '../Aside';
import { Content } from '../Content';
import './main.scss';

export const Main = () => (
  <div id="main">
    <Aside />
    <Content />
  </div>
);