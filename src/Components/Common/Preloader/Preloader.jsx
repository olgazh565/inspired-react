import {Oval} from 'react-loader-spinner';

export const Preloader = ({size}) => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    padding: '100px 0',
  };

  return (
    <div style={style}>
      <Oval
        visible={true}
        height={size}
        width={size}
        color='#404040'
        secondaryColor='#8A8A8A'
        ariaLabel='oval-loading'
        strokeWidth='3'
      />
    </div>
  );
};
