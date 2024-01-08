import {useFormikContext} from 'formik';
import {Count} from '../../../Common/Count/Count';

export const ProductCount = ({
  classname,
  count,
  handleIncrement,
  handleDecrement,
  isInFormik,
}) => {
  const {setFieldValue} = useFormikContext();

  return (
    <Count
      classname={classname}
      count={count}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      isInFormik={isInFormik}
      setFieldValue={setFieldValue}
    />
  );
};
