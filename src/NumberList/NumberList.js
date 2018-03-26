import React from 'react';
import './numberList.scss';

export const NumberList = (props) => {
  const num = [];
  for (let i = +props.from; i <= +props.to; i++) {
    num.push(i);
  }
  const items = num.map(item => <li key={item}>{item}</li>);

  if (props.odd) {
    return (
      <ul>{
        num
          .filter(item => item % 2)
          .map(item => <li key={item}>{item}</li>)
      }
      </ul>
    );
  }

  if (props.even) {
    return (
      <ul>{
        num
          .filter(item => !(item % 2))
          .map(item => <li key={item}>{item}</li>)
      }
      </ul>
    );
  }

  return <ul>{items}</ul>;
};
