import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './pages/Login';

export const RouteForNotLogin = ({ setLoginState }) => {
  return (
    <Switch>
      <Route
        path="/login"
        render={() => <Login onLogin={setLoginState} />}
      />
      <Redirect to="/login"/>
    </Switch>
  );
};
