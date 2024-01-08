import style from './Count.module.scss';
import {useEffect} from 'react';
import classNames from 'classnames';
import {Field} from 'formik';

export const Count = ({
  classname,
  count,
  handleIncrement,
  handleDecrement,
  isInFormik = false,
  setFieldValue
}) => {
  useEffect(() => {
    if (isInFormik) {
      setFieldValue('count', count, false);
    }
  }, [isInFormik, count, setFieldValue]);

  return (
    <div className={classNames(style.count, classname)}>
      <button
        className={style.item}
        onClick={handleDecrement}
        type='button'
      >
        -
      </button>
      {isInFormik ? (
        <Field
          className={classNames(style.item, style.input)}
          name='count'
          value={count}
          type='text'
          readOnly
        />) : (
        <span
          className={classNames(style.item, style.number)}>
          {count}
        </span>
      )}
      <button
        className={style.item}
        onClick={handleIncrement}
        type='button'
      >
        +
      </button>
    </div>
  )
};
