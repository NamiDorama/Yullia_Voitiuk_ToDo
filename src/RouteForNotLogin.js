import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './pages/Login';
import { Form } from './components/Form';

export const RouteForNotLogin = ({ setLoginState }) => {
  return (
    <Switch>
      <Route
        path="/user_create" exact
        render={() => <Form onLogin={setLoginState} />}
      />
      <Route
        path="/login"
        render={() => <Login onLogin={setLoginState} />}
      />
      <Redirect to="/login"/>
    </Switch>
  );
};
