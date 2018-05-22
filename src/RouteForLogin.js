import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './parts';
import { GetLocation } from './components/GetLocation';
import { NotFound } from './components/NotFound';
import { Task } from './pages/';
import { Async } from './components';

export const RouteForLogin = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/home" exact component={Main} />
    <Route path="/tasks" exact render={() => <Async name="TaskListTab" path="pages/TaskListTab" />} />
    <Route path="/tasks/:task" component={Task} />
    <Route path="/contacts" component={GetLocation} />
    <Route path="/user_page" render={() => <Async name="UserPage" path="pages/UserPage" />} />
    <Redirect from="/login" to="/home" />
    <Route render={({ location }) => <NotFound location={location} />} />
  </Switch>
);
