import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './parts';
import { GetLocation } from './components/GetLocation';
import { TaskListTab } from './pages/TaskListTab';
import {TaskList} from './pages';
import { NotFound } from './components/NotFound';
import { Greeting } from './components/Greeting';
import { UsersTask } from './pages';
import { Task } from './pages/Task';

export const RouteForLogin = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/home" exact component={Main} />
    <Route path="/tasks" exact component={TaskListTab} />
    <Route path="/tasks/:task" component={Task} />
    <Route path="/contacts" component={GetLocation} />
    <Route path="/user_page" render={(props) => <Greeting name={props.user} />} />
    <Redirect from="/login" to="/home" />
    <Route render={({ location }) => <NotFound location={location} />} />
  </Switch>
);
