import style from './Color.module.scss';
import classNames from 'classnames';
import {useEffect, useRef} from 'react';

export const Color = ({color, check}) => {
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current.style.setProperty('--data-color', color)
  }, [color]);

  return (
    <li
      className={classNames(style.color, check && style.colorCheck)}
      ref={colorRef}
      // style={{'--data-color': color}}
    />
  );
};
