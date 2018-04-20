import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './Main';
import { GetLocation } from './GetLocation';
import {TaskList} from './TaskList';
import { NotFound } from './NotFound';
import { Greeting } from './Greeting';
import { UsersTask } from './UsersTask';

export const RouteForLogin = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/home" exact component={Main} />
    <Route path="/tasks" component={TaskList} />
    <Route path="/task" component={UsersTask} />
    <Route path="/contacts" component={GetLocation} />
    <Route path="/user_page" render={(props) => <Greeting user={props.user} />} />
    <Redirect from="/login" to="/home" />
    <Route render={({ location }) => <NotFound location={location} />} />
  </Switch>
);
