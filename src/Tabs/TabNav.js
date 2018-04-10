import ProptTypes from 'prop-types';

export const TabNav = ({ list, select, activeIndex }) => {
  const onClick = (e, id) => {
    e.preventDefault();
    select(id);
  };

  return (
    <nav className="nav-tab">
      <ul> {list.map((el, index) =>
        (<li
          key={index}
          className={activeIndex === index ? 'active' : ''}
        >
          <a
            href="/"
            onClick={e => onClick(e, index)}
          >
            {el}
          </a>
        </li>)
      )}
      </ul>
    </nav>
  );
};

TabNav.propType = {
  list: ProptTypes.array,
  select: ProptTypes.func
};
TabNav.defaultProps = {
  list: [],
  select: _ => _
};
