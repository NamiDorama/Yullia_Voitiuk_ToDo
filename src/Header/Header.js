import { Navigation } from '../Navigation';
import './header.scss';

const navList = ['Home', 'Tasks', 'Gallery', 'Contacts'];

export const Header = ({ login, user, logout }) => {
  return (
    <div id="header">
      <a href="/"><img src="./img/tik.png" alt="Task manager" title="Task manager" /></a>
      <Navigation list={navList} user={user} />
      {login && <button onClick={() => logout()}>Logout</button>}
    </div>
  );
};
