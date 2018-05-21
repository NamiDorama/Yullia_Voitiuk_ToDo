import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './pages/Login';
import { UserCreate } from './components/UserCreate';
import { SuccessPage } from './components/SuccessPage';

export const RouteForNotLogin = () => {
  return (
    <Switch>
      <Route
        path="/user_create" exact
        component={UserCreate}
      />
      <Route path="/success_page" component={SuccessPage} />
      <Route
        path="/login"
        component={Login}
      />
      <Redirect to="/login"/>
    </Switch>
  );
};
