import style from './Cart.module.scss';
import {CartItem} from './CartItem/CartItem';
import {Container} from '../../../Layout/Container/Container';

export const Cart = ({cartItems, goodsList}) => {
  const totalPrice = cartItems.reduce((sum, item) => {
    const product = goodsList.find(product => product.id === item.id);

    if (product) {
      return sum + product.price * item.count;
    } else {
      return sum;
    }
  }, 0);

  return (
    <section className={style.cart}>
      <Container>
        <h2 className={style.title}>Корзина</h2>

        {cartItems.length ?
          <>
            <ul className={style.list}>
              {cartItems.map(item => (
                <li
                  className={style.item}
                  key={`${item.id}-${item.color}-${item.size}`}
                >
                  <CartItem {...item} goodsList={goodsList} />
                </li>
              ))}
            </ul>

            <div className={style.total}>
              <p>Итого:</p>
              <p>руб {totalPrice}</p>
            </div>
          </>
          :
          <h3 className={style.empty}>В корзине пусто</h3>
        }
        
      </Container>
    </section>
  );
};
