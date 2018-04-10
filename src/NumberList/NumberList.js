import ProptTypes from 'prop-types';
import './numberList.scss';

export const NumberList = (props) => {
  const num = [];
  for (let i = props.from; i <= props.to; i++) {
    num.push(i);
  }

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

  const items = num.map(item => <li key={item}>{item}</li>);
  return <ul>{items}</ul>;
};

NumberList.propTypes = {
  from: ProptTypes.number,
  to: ProptTypes.number,
  odd: ProptTypes.bool,
  even: ProptTypes.bool
};
NumberList.defaultProps = {
  from: 0,
  to: 10,
  odd: false,
  even: false
};
