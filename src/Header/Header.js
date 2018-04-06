import { Navigation } from '../Navigation';
import './header.scss';

const Heading = () => <h1>Here is the heading!</h1>;
const navList = ['Home', 'Products', 'Contacts'];

export const Header = () => (
  <div id="header">
    <img src="./img/jake.gif" alt="Cute cat"/>
    <Heading />
    <Navigation list={navList} />
  </div>
);
