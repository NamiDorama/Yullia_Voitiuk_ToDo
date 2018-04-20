export const NotFound = (props) => (
  <React.Fragment>
    <h1>404 Page <em>{props.location.pathname.replace('/', '')}</em> is not exist</h1>
  </React.Fragment>
);