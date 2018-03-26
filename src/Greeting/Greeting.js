import React from 'react';
import './greeting.scss';

export const Greeting = ({ name }) => {
  const hours = new Date().getHours();
  const user = name ? `, ${name}` : '';

  if (hours > 22 && hours < 24 || hours >= 0 && hours <= 3) {
    return <h3>Good night{user}!</h3>;
  }

  if (hours > 3 && hours <= 12) {
    return <h3>Good morning{user}!</h3>;
  }

  if (hours > 12 && hours <= 18) {
    return <h3>Good afternoon{user}!</h3>;
  }

  return <h3>Goog evening{user}!</h3>;
};
