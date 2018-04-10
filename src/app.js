import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app.component';

import './app.scss';

const Root = (
  <Router>
    <App />
  </Router>
);

ReactDom.render(Root, document.getElementById('app'));
