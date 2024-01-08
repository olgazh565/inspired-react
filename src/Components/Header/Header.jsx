import style from './Header.module.scss';
import {Top} from './Top/Top';
import {Search} from '../Search/Search';
import {Navigation} from './Navigation/Navigation';

export const Header = () => (
  <header className={style.header}>
    <Top />
    <Search />
    <Navigation />
  </header>
);
