import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './parts';
import { GetLocation } from './components/GetLocation';
import { TaskListTab } from './pages/';
import { NotFound } from './components/NotFound';
import {UsersTasks} from './pages/';
import { Gallery } from './pages/';
import { Task } from './pages/';
import { UserPage } from './pages/UserPage';

export const RouteForLogin = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/home" exact component={Main} />
    <Route path="/tasks" exact component={TaskListTab} />
    <Route path="/tasks/:task" component={Task} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/contacts" component={GetLocation} />
    <Route path="/user_page" component={UserPage} />
    <Redirect from="/login" to="/home" />
    <Route render={({ location }) => <NotFound location={location} />} />
  </Switch>
);
