import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {setPage} from '../features/goodsSlice';

export const usePageFromSearchParams = () => {
  const dispatch = useDispatch();
  const {search} = useLocation();
  const searchParams = new URLSearchParams(search);
  const page = +searchParams.get('page') || 1;

  useEffect(() => {
    dispatch(setPage(page));
  }, [page, dispatch]);

  return page;
};