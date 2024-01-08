import style from './ColorLabel.module.scss';
import {useEffect, useRef} from 'react';
import {Field} from "formik";

export const ColorLabel = ({color}) => {
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.style.setProperty('--data-color', color?.code)
  }, [color]);

  return (
    <label className={style.color} ref={colorRef}>
      <Field
        className={style.input}
        type='radio'
        name='color'
        value={color?.title}
      />
      <span className={style.colorCheck}></span>
    </label>
  );
};
