import ProptTypes from 'prop-types';

export const User = ({ id, name, getUserPosts }) => <li onClick={() => getUserPosts(id)}>{name}</li>;

User.propTypes = {
  id: ProptTypes.number.isRequired,
  name: ProptTypes.string.isRequired,
  getUserPosts: ProptTypes.func.isRequired
};
