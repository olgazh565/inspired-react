import style from './Main.module.scss';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';

export const Main = ({children}) => {
  const {status} = useSelector(state => state.serverStatus);
  const {pathname} = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!status && pathname !== '/404') {
      navigate('/404');
    }
  }, [status, pathname, navigate]);

  return (
    <div className={style.main}>
      {children}
    </div>
  );
};
