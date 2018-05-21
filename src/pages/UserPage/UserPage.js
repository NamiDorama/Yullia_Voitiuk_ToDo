import { connect } from 'react-redux';
import { Form } from '../../components/Form';
import { updateUserAsync } from '../../store';

export const UserPageComponent = (props) => {
  const updateUserHandler = (data) => {
    props.updateUser(data);
  };

  return (
    <Form
      disabled={["email"]}
      skipped={["password", "repeatPassword"]}
      data={props.user}
      onSubmitCallback={updateUserHandler}
    />
  )
};

const mapDispatchToProps = dispatch => ({
  updateUser(user) { dispatch(updateUserAsync(user)); }
});

export const UserPage = connect(({ user }) => ({ user }), mapDispatchToProps)(UserPageComponent);
