import style from './Gender.module.scss';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import classNames from 'classnames';

export const Gender = () => {
  const {
    activeGender,
    genderList,
    categories
  } = useSelector(state => state.navigation);

  return (
    <ul className={style.gender}>
      {genderList.map(item => (
        <li className={style.item} key={item}>
          <NavLink
            className={({isActive}) =>
              classNames(style.link, (isActive || activeGender === item) && style.linkActive)}
            to={`/catalog/${item}`}>
            {categories[item].title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
