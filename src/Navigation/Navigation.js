import ProptTypes from 'prop-types';
import './navigation.scss';

export const Navigation = ({ list }) => { return (
    <nav className="main-nav">
      <ul>
        {list.map((item) => {
          const href = `/${item.toLowerCase()}`;
          return <li key={item}><a href={href} >{ item }</a></li>;
        })
       }
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  list: ProptTypes.array
};
Navigation.defaultProps = {
  lest: []
};
