import style from './FavoritePage.module.scss';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Goods} from '../../Goods/Goods'
import {fetchCategory} from '../../../features/goodsSlice';
import {usePageFromSearchParams} from '../../../hooks/usePageFromSearchParams';

export const FavoritePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const page = usePageFromSearchParams();

  useEffect(() => {
    if (favorites) {
      const param = {list: favorites};
      const isLastPage = page === Math.ceil((favorites.length + 1) / 12);

      if (page > 1 && favorites.length % 12 === 0 && isLastPage) {
        navigate(`/favorite?page=${page - 1}`);
        return;
      }

      if (page) {
        param.page = page;
      }

      dispatch(fetchCategory(param));
    }
  }, [favorites, page, dispatch, navigate]);

  return (
    favorites.length ?
      <Goods title='Избранное' /> :
      <h3 className={style.empty}>
        Вы ничего не добавили в избранное
      </h3>
  );
};
