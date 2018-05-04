import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './app.component';
import { store } from './store';

import './app.scss';

const Root = () => (
  <Router>
    <App />
  </Router>
);

const MainApp = <Provider store={store}><Root/></Provider>;

ReactDom.render(MainApp, document.getElementById('app'));
