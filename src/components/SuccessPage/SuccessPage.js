import { Link } from 'react-router-dom';

export const SuccessPage = () => (
  <React.Fragment>
    <p>Account was successfully created</p>
    <p>Now you can use your email and password to login into profile</p>
    <Link to="/login">
      Go to the login
    </Link>
  </React.Fragment>
);
