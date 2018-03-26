import React from 'react';
import './navigation.scss';

export const Navigation = ({ islogin }) => (
  <nav className="main-nav">
    <ul>
      <li><a href="/home">Home</a></li>
      <li><a href="/songs">Songs</a></li>

      {islogin && <li><a href="/users">User</a></li>}
    </ul>
  </nav>
);
