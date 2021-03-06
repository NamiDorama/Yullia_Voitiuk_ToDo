import { Navigation } from '../Navigation/index';
import { logoutUser } from '../../store';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './header.scss';

const navList = ['Home', 'Tasks', 'Contacts'];

export const HeaderComponent = ({ user, dispatch }) => {

  const logoutHeandler = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <div id="header">
      <a href="/"><img src="./img/tik.png" alt="Task manager" title="Task manager" /></a>
      <Navigation list={navList} user={user} />
      {
        user &&
        <button onClick={(e) => logoutHeandler(e)}>
          Logout
        </button>
      }
    </div>
  );
};

export const Header = withRouter(connect()(HeaderComponent));
