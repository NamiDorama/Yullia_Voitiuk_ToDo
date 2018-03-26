import { User } from '../User';
import './usersList.scss';

export const UsersList = ({ users }) => {
  const items = users.map(item => (
    <User
      key={item.id}
      firstName={item.firstName}
      lastName={item.lastName}
      age={item.age}
    />));

  return (
    <React.Fragment>
      <h3 className="users-heading">Users:</h3>
      <ul>{items}</ul>
    </React.Fragment>
  );
};
