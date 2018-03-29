export const User = ({ id, name, getUserPosts }) => <li onClick={() => getUserPosts(id)}>{name}</li>;
