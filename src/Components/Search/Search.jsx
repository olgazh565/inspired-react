import style from './Search.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Container} from '../Layout/Container/Container';
import {toggleOpenSearch} from '../../features/searchSlice';

export const Search = () => {
  const {openSearch} = useSelector(state => state.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    search: '',
  };

  const validationSchema = Yup.object({
    search: Yup
      .string()
      .required('Введите ваш запрос')
  });

  const handleSubmit = ({search}, {resetForm}) => {
    if (search.trim()) {
      navigate(`/search?q=${search}`);
      resetForm();
      dispatch(toggleOpenSearch());
    }
  };

  return (
    openSearch && (
      <div className={style.search}>
        <Container>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >

            <Form className={style.form}>

              <Field
                className={style.input}
                type='search'
                name='search'
                placeholder='Найти...'
              />

              <ErrorMessage
                name='search'
                component={'p'}
                className={style.error}
              />

              <button className={style.btn} type='submit'>
                Искать
              </button>
              
            </Form>
          </Formik>
        </Container>
      </div>)
  );
};
