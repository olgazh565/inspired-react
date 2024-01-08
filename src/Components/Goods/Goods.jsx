import style from './Goods.module.scss';
import {useSelector} from 'react-redux';
import {Container} from '../Layout/Container/Container';
import {Product} from '../Product/Product';
import {Pagination} from '../Common/Pagination/Pagination';
import {Preloader} from '../Common/Preloader/Preloader';

export const Goods = ({title, noCount = false}) => {
  const {goodsList, totalCount, status} = useSelector(state => state.goods);
  const pageTitle = title ?? 'Новинки';

  return (
    <section>
      <Container>
        {status === 'loading' ? (
          <Preloader size={80}/>
        ) : (
          <>
            <h2 className={style.title}>
              {pageTitle}
              {(goodsList.length > 0 && !noCount && pageTitle !== 'Новинки') ?
                <sup>&nbsp;({totalCount || goodsList.length})</sup> : ''}
            </h2>

            <ul className={style.list}>
              {goodsList.map(item => (
                <li key={item.id}>
                  <Product {...item} />
                </li>
              ))}
            </ul>

            <Pagination />
          </>
        )}
      </Container>
    </section>
  );
};
