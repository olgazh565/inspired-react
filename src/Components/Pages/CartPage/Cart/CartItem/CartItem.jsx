import style from './CartItem.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import classNames from 'classnames';
import {API_URL} from '../../../../../const';
import {addToCart, removeFromCart} from '../../../../../features/cartSlice';
import {Count} from '../../../../Common/Count/Count';

export const CartItem = ({id, color, size, count, goodsList}) => {
  const dispatch = useDispatch();
  const {colorList} = useSelector(state => state.colors);
  const item = goodsList.find(item => item.id === id);

  const handleCountChange = (count) => {
    dispatch(addToCart({id, color, size, count}));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart({id, color, size}));
  };

  return (
    <article className={style.item}>
      <NavLink
        to={`/product/${item?.id}`}
        className={style.link}
      >
        <img
          className={style.image}
          src={`${API_URL}${item?.pic}`}
          alt={item?.title}
        />
      </NavLink>

      <div className={style.content}>
        <h3 className={style.title}>{item?.title}</h3>
        <p className={style.price}>руб {item?.price}</p>

        <div className={style.vendorCode}>
          <span className={style.subtitle}>Артикул</span>
          <span>{id}</span>
        </div>
      </div>

      <div className={style.prop}>
        <div className={style.color}>
          <p className={classNames(style.subtitle, style.colorTitle)}>
            Цвет
          </p>
          <div
            className={style.colorItem}
            style={{'--data-color': colorList?.find(item => item.title === color)?.code}}>
          </div>
        </div>

        <div className={style.size}>
          <p className={classNames(style.subtitle, style.sizeTitle)}>
            Размер
          </p>
          <div className={style.sizeItem}>
            {size}
          </div>
        </div>
      </div>

      <button
        className={style.del}
        aria-label='Удалить товар из корзины'
        onClick={handleRemoveItem}
      >
      </button>

      <Count
        classname={style.count}
        count={count}
        handleIncrement={() => {
          handleCountChange(count + 1);
        }}
        handleDecrement={() => {
          if (count > 1) {
            handleCountChange(count - 1);
          } else {
            handleRemoveItem();
          }
        }}
      />

    </article>
  );
};
