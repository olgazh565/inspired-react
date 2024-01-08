import style from './ColorList.module.scss';
import {useSelector} from 'react-redux';
import {Color} from './Color/Color';
import {ColorLabel} from './ColorLabel/ColorLabel';

export const ColorList = ({colors, validate}) => {
  const {colorList} = useSelector(state => state.colors);

  return validate ? (
    <div className={style.colorList}>
      {colors?.map((id) => {
        const color = colorList.find(color => color.id === id);

        return <ColorLabel
          key={id}
          color={color}
        />
      })}
    </div>) :
    (<ul className={style.colorList}>
      {colors?.map((id, i) => {
        const color = colorList.find(color => color.id === id);

        return <Color
          key={id}
          color={color?.code}
          check={!i}
        />
      })}
    </ul>
    );
};
