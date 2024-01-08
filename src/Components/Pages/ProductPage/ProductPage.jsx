import style from './ProductPage.module.scss';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import {API_URL} from '../../../const';
import {Goods} from '../../Goods/Goods';
import {Container} from '../../Layout/Container/Container';
import {fetchProduct} from '../../../features/productSlice';
import {fetchCategory} from '../../../features/goodsSlice';
import {addToCart} from '../../../features/cartSlice';
import {ProductSize} from './ProductSize/ProductSize';
import {ColorList} from '../../Common/ColorList/ColorList';
import {Preloader} from '../../Common/Preloader/Preloader';
import {BtnLike} from '../../Common/BtnLike/BtnLike';
import {ProductCount} from './ProductCount/ProductCount';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {colorList, status: statusColor} = useSelector(state => state.colors);
  const {product, status: statusProduct} = useSelector(state => state.product);
  const {gender, category, colors} = product;
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count => count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count => count - 1);
    }
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
    setCount(1);
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchCategory({
      gender,
      category,
      count: 4,
      top: true,
      exclude: id
    }));
  }, [gender, category, id, dispatch]);

  const validationSchema = Yup.object({
    size: Yup
      .string()
      .required('Выберите размер'),
  });

  return (
    [statusProduct, statusColor].every((status) => status === "success") && (
      <>
        <section className={style.card}>
          <Container className={style.container}>

            {!isImgLoaded && <Preloader size={80} />}
            
            <img
              className={style.image}
              src={`${API_URL}${product.pic}`}
              alt={product.title}
              onLoad={() => setIsImgLoaded(true)}
            />

            <Formik
              initialValues={{
                color: colorList.find(item => item.id === colors[0])
                  .title,
                size: '',
                count: count,
              }}
              validationSchema={validationSchema}
              validateOnChange='false'
              onSubmit={values => {
                dispatch(addToCart({
                  id,
                  ...values,
                }));
              }}
            >
              <Form className={style.content}>
                <h2 className={style.title}>
                  {product.title}
                </h2>

                <p className={style.price}>
                  руб {product.price}
                </p>

                <div className={style.vendorCode}>
                  <span className={style.subtitle}>
                    Артикул
                  </span>
                  <span className={style.id}>
                    {product.id}
                  </span>
                </div>

                <div className={style.color}>
                  <span className={classNames(style.subtitle, style.colorTitle)}>
                    Цвет
                  </span>

                  <ColorList colors={colors} validate={true} />
                </div>

                <ProductSize size={product.size} className={style.size} />

                <div className={style.description}>
                  <p className={classNames(style.subtitle, style.descriptionTitle)}>
                    Описание
                  </p>
                  <p className={style.descriptionText}>
                    {product.description}
                  </p>
                </div>

                <div className={style.control}>

                  <ProductCount
                    classname={style.count}
                    count={count}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    isInFormik={true}
                  />

                  <button className={style.addCart} type='submit'>
                    В корзину
                  </button>

                  <BtnLike id={product.id} />
                </div>

              </Form>
            </Formik>
          </Container>
        </section>

        <Goods title='Вам также может понравиться' noCount={true} />
      </>
    )
  );
};
