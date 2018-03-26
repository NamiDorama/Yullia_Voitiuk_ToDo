import './navigation.scss';

export const Navigation = ({ list }) => {
  const items = (list || []);

  return (
    <nav className="main-nav">
      <ul>
        {items.map((item) => {
          const href = `/${item.toLowerCase()}`;
          return <li key={item}><a href={href} >{ item }</a></li>;
        })
       }
      </ul>
    </nav>
  );
};
