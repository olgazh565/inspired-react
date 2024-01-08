import style from './FavoritePage.module.scss';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Goods} from '../../Goods/Goods'
import {fetchCategory} from '../../../features/goodsSlice';
import {usePageFromSearchParams} from '../../../hooks/usePageFromSearchParams';

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const page = usePageFromSearchParams();

  useEffect(() => {
    if (favorites) {
      const param = {list: favorites};

      if (page) {
        param.page = page;
      }

      dispatch(fetchCategory(param));
    }
  }, [favorites, page, dispatch]);

  return (
    favorites.length ?
      <Goods title='Избранное' /> :
      <h3 className={style.empty}>
        Вы ничего не добавили в избранное
      </h3>
  );
};
