import style from './SearchPage.module.scss';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import {fetchAll} from '../../../features/goodsSlice';
import {Goods} from '../../Goods/Goods';
import {Preloader} from '../../Common/Preloader/Preloader';

export const SearchPage = () => {
  const {goodsList, status} = useSelector(state => state.goods);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const search = searchParams.get('q');

  useEffect(() => {
    const params = {search};

    dispatch(fetchAll(params));
  }, [search, dispatch]);

  return (
    <>
      {(goodsList.length !== 0) && (
        <Goods title={`По запросу "${search}" найдено`} />
      )}

      {(!goodsList.length && status === 'success') && (
        <h3 className={style.empty}>
          {`По запросу "${search}" ничего не найдено`}
        </h3>
      )}

      {status === 'loading' && <Preloader size={80} />}
    </>
  );
};
