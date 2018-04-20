import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './Main';
import { GetLocation } from './GetLocation';
import { TaskListTab } from './TaskListTab';
import {TaskList} from './TaskList';
import { NotFound } from './NotFound';
import { Greeting } from './Greeting';
import { UsersTask } from './UsersTask';
import { Task } from './Task';

export const RouteForLogin = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/home" exact component={Main} />
    <Route path="/tasks" exact component={TaskListTab} />
    <Route path="/tasks/:task" component={Task} />
    <Route path="/contacts" component={GetLocation} />
    <Route path="/user_page" render={(props) => <Greeting user={props.user} />} />
    <Redirect from="/login" to="/home" />
    <Route render={({ location }) => <NotFound location={location} />} />
  </Switch>
);
