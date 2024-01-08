import style from './ErrorPage.module.scss';
import {useLocation, useNavigate, useRouteError} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useRef} from 'react';
import {fetchColors} from '../../../features/colorsSlice';
import {fetchNavigaton} from '../../../features/navigationSlice';

export const ErrorPage = () => {
  const {status} = useSelector(state => state.serverStatus);
  const routeError = useRouteError();
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const timerIdRef = useRef();

  useEffect(() => {
    if (status && pathname === '/404') {
      navigate('/');
    }
  }, [status, pathname, navigate]);

  useEffect(() => {
    if (!status && pathname === '/404') {
      clearInterval(timerIdRef.current);

      timerIdRef.current = setInterval(() => {
        dispatch(fetchColors());
        dispatch(fetchNavigaton());
      }, 3000);
    }

    return () => {
      clearInterval(timerIdRef.current);
    };

  }, [dispatch, status, pathname]);

  return (
    <div className={style.error}>
      <h2 className={style.title}>
        Произошла ошибка, попробуйте зайти позже
      </h2>
      <p className={style.message}>
        {routeError?.message ?? 'Неизвестная ошибка'}
      </p>
    </div>
  );
};
