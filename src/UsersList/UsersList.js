import ProptTypes from 'prop-types';
import { User } from '../User';
import './usersList.scss';

export class UsersList extends Component {
  state = {
    posts: []
  };

  getUserPosts = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  };

  render() {
    const items = this.props.users.map(item => (
      <User
        key={item.id}
        name={item.name}
        id={item.id}
        getUserPosts={this.getUserPosts}
      />));

    return (
      <div className="users-wrapper">
        <div className="users">
          <h3 className="users-heading">Users:</h3>
          <ul>{items}</ul>
        </div>
        {
        this.state.posts.length > 0 &&
        <div className="posts-wrapper">
          <h3>Posts:</h3>
          <ul>
            {this.state.posts.map(post => <li key={post.id}>{post.body}</li>)}
          </ul>
        </div>
        }
      </div>
    );
  }
}

UsersList.propTypes = {
  users: ProptTypes.array
};
UsersList.defaultProps = {
  users: []
};
