import style from './BtnLike.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import classNames from 'classnames';
import LikeSVG from '../../../assets/heart.svg?react';
import {addToFavorite, removeFromFavorite} from '../../../features/favoritesSlice';

export const BtnLike = ({id}) => {
  const dispatch = useDispatch();
  const isFavorite = useSelector(state => state.favorites.includes(id));

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(id));
    } else {
      dispatch(addToFavorite(id));
    }
  };

  return (
    <button
      className={isFavorite ? classNames(style.like, style.active) : style.like}
      type='button'
      aria-label='Добавить в избранное'
      onClick={handleToggleFavorite}
    >
      <LikeSVG />
    </button>
  );
};
