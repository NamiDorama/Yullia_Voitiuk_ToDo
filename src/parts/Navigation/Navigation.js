import ProptTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './navigation.scss';

export const Navigation = ({ list, user }) => {
  console.log('navigation', user);
  return (
    <nav className="main-nav">
      <ul>
        {list.map((item) => {
          const href = `/${item.toLowerCase()}`;
          return (
            <li key={item}>
              <NavLink
                to={href}
                exact
                activeClassName="active"
              >
                {item}
              </NavLink>
            </li>
          );
        })
       }
      {
        user &&
          <li>
            <NavLink
              to="/user_page"
              exact
              activeClassName="active"
            >
              {user.firstName}
            </NavLink>
          </li>
      }
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  list: ProptTypes.array
};
Navigation.defaultProps = {
  lest: []
};