import { Route, Switch, Redirect } from 'react-router-dom';

import { Main } from './Main';
import { GetLocation } from './GetLocation';
import {TaskList} from './TaskList';
import { Login } from './Login';

export class Pages extends Component {
  render() {
    return (
        this.props.login ?
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/home" exact component={Main} />
          <Route path="/tasks" component={TaskList} />
          <Route path="/contacts" component={GetLocation} />
          <Redirect from="/login" to="/home" />
          <Route render={({ location }) => <h1>404 Page <em>{location.pathname.replace('/', '')}</em> is not exist</h1>} />
        </Switch> :
          <Switch>
            <Route
              path="/login"
              render={() => <Login onLogin={this.props.setLoginState} />}
            />
            <Redirect to="/login" />
          </Switch>
    );
  }
}




