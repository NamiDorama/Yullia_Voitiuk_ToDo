import { Navigation } from '../Navigation/index';
import './header.scss';

const navList = ['Home', 'Tasks', 'Gallery', 'Contacts'];

export const Header = ({ user, logout }) => {
  console.log(user);
  return (
    <div id="header">
      <a href="/"><img src="./img/tik.png" alt="Task manager" title="Task manager" /></a>
      <Navigation list={navList} user={user} />
      {user && <button onClick={() => logout(null)}>Logout</button>}
    </div>
  );
};
