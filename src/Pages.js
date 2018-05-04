import { RouteForLogin } from './RouteForLogin';
import { RouteForNotLogin } from './RouteForNotLogin';

export const Pages = ({ login, setLoginState }) => (
    login ?
      <RouteForLogin user={login} /> :
      <RouteForNotLogin setLoginState={setLoginState} />
);
