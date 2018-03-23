import React from 'react';
import './navigation.scss'

export const Navigation = ({ islogin }) => (
	<nav className="main-nav">
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">Songs</a></li>

			{islogin && <li><a href="#">User</a></li>}
		</ul>
  </nav>
);