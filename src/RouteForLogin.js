import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './Main';
import { GetLocation } from './GetLocation';
import {TaskList} from './TaskList';
import { NotFound } from './NotFound';

export const RouteForLogin = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/home" exact component={Main} />
    <Route path="/tasks" component={TaskList} />
    <Route path="/contacts" component={GetLocation} />
    <Redirect from="/login" to="/home" />
    <Route render={({ location }) => <NotFound location={location} />} />
  </Switch>
);
