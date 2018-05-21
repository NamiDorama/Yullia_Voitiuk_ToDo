import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form } from '../../components/Form';
import { createUserAsync } from '../../store';

export const UserCreateComponent = (props) => {
  const createUserHandler = (data) => {
    props.createUser(data);
  };

  return (
    <React.Fragment>
      <Form
        onSubmitCallback={createUserHandler}
      />
      {
        props.registered && <Redirect to="/success_page" />
      }
    </React.Fragment>

  )
};

const mapDispatchToProps = dispatch => ({
  createUser(user) { dispatch(createUserAsync(user)); }
});

export const UserCreate = connect(({ registered }) => ({ registered }), mapDispatchToProps)(UserCreateComponent);
