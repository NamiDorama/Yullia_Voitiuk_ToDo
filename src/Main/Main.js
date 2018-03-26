import React from 'react';
import { Greeting } from '../Greeting';
import { NumberList } from '../NumberList';
import { UsersList } from '../UsersList';
import { Aside } from '../Aside';
import { Content } from '../Content';
import { users } from '../consts';
import './main.scss';

export const Main = () => (
  <React.Fragment>
    <Greeting name="Yuliia" />
    <NumberList
      from="3"
      to="10"
      even
    />
    <UsersList users={users} />
    <main id="main">
      <Aside />
      <Content />
    </main>
  </React.Fragment>
);
