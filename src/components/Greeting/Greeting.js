import ProptTypes from 'prop-types';
import './greeting.scss';

export const Greeting = ({ name }) => {
  const hours = new Date().getHours();

  if (hours >= 22 && hours <= 24 || hours >= 0 && hours <= 3) {
    return <h3>Good night{`, ${name}`}!</h3>;
  }

  if (hours > 3 && hours <= 12) {
    return <h3>Good morning{`, ${name}`}!</h3>;
  }

  if (hours > 12 && hours <= 18) {
    return <h3>Good afternoon{`, ${name}`}!</h3>;
  }

  return <h3>Goog evening{`, ${name}`}!</h3>;
};

Greeting.propTypes = {
  name: ProptTypes.string
};

