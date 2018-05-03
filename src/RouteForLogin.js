import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './parts';
import { GetLocation } from './components/GetLocation';
import { TaskListTab } from './pages/TaskListTab';
import {TaskList} from './pages';
import { NotFound } from './components/NotFound';
import {UsersTasks} from './pages/UsersTasks';
import { Gallery } from './pages/Gallery';
import { Task } from './pages/Task';

export const RouteForLogin = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/home" exact component={Main} />
    <Route path="/tasks" exact component={TaskListTab} />
    <Route path="/tasks/:task" component={Task} />
    <Route path="/gallery" component={Gallery} />
    <Route path="/contacts" component={GetLocation} />
    <Route path="/user_page" component={UsersTasks} />
    <Redirect from="/login" to="/home" />
    <Route render={({ location }) => <NotFound location={location} />} />
  </Switch>
);
