import style from './Top.module.scss';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';
import logo from '/src/assets/logo.svg';
import LikeSVG from '../../../assets/heart.svg?react';
import CartSVG from '../../../assets/cart.svg?react';
import SearchSVG from '../../../assets/search.svg?react';
import {Container} from '../../Layout/Container/Container';
import {toggleOpenSearch} from '../../../features/searchSlice';

export const Top = () => {
  const {countItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleOpenSearch = () => {
    dispatch(toggleOpenSearch());
  };

  return (
    <div className={style.top}>
      <Container className={style.container}>
        <a
          className={classNames(style.link, style.phone)}
          href='tel:89304902620'
        >
          8 930 490 26 20
        </a>

        <NavLink className={style.logo} to='/'>
          <img src={logo} alt='логотип Inspired' />
        </NavLink>

        <div className={style.navigation}>
          <ul className={style.navList}>
            <li className={style.navItem}>
              <button
                className={style.link}
                onClick={handleOpenSearch}>
                <SearchSVG />
              </button>
            </li>

            <li className={style.navItem}>
              <NavLink
                className={style.link}
                to='/cart'
              >
                <CartSVG />
                <span className={style.linkCount}>
                  {countItems}
                </span>
              </NavLink>
            </li>

            <li className={style.navItem}>
              <NavLink
                className={classNames(style.link, style.like)}
                to='/favorite'
              >
                <LikeSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

