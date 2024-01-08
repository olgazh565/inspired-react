import style from './Product.module.scss';
import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {API_URL} from '../../const';
import {ColorList} from '../Common/ColorList/ColorList';
import {Preloader} from '../Common/Preloader/Preloader';
import {BtnLike} from '../Common/BtnLike/BtnLike';

export const Product = ({id, pic, title, price, colors}) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  return (
    <article className={style.product}>
      <NavLink
        className={style.link}
        to={`/product/${id}`}
      >

        {!isImgLoaded && <Preloader size={50}/>}

        <img
          className={style.image}
          src={`${API_URL}/${pic}`}
          alt={title} 
          onLoad={() => setIsImgLoaded(true)}
          />
          
        <h3 className={style.title}>
          {title}
        </h3>

      </NavLink>

      <div className={style.row}>
        <p className={style.price}>
          руб {price}
        </p>

        <BtnLike id={id}/>
      </div>

      <ColorList colors={colors} />
    </article>
  );
};
