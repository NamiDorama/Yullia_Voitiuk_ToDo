import { Navigation } from '../Navigation';
import './header.scss';

const navList = ['Home', 'Products', 'Contacts'];

export const Header = () => (
  <div id="header">
    <a href="/"><img src="./img/tik.png" alt="Task manager" title="Task manager" /></a>
    <Navigation list={navList} />
  </div>
);
