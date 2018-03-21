import React from 'react';
import ReactDom from 'react-dom';

import { Navigation } from "./Navigation";

const time = new Date().toLocaleTimeString();
const component = (
	<div>
		<h1>Hello, React! { time }</h1>
		<Navigation />
	</div>
);
ReactDom.render(component, document.getElementById('app'));
