import { connect } from 'react-redux';
import { Form } from '../../components/Form';
import { createUserAsync } from '../../store';

export const UserCreateComponent = (props) => {
  const createUserHandler = (data) => {
    props.createUser(data);
  };

  return (
    <Form
      onSubmitCallback={createUserHandler}
    />
  )
};

const mapDispatchToProps = dispatch => ({
  createUser(user) { dispatch(createUserAsync(user)); }
});

export const UserCreate = connect(null, mapDispatchToProps)(UserCreateComponent);
