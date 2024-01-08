import {useEffect} from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Root} from './routes/Root';
import {fetchNavigaton} from './features/navigationSlice';
import {fetchColors} from './features/colorsSlice';
import {ErrorPage} from './Components/Pages/ErrorPage/ErrorPage';
import {ProductPage} from './Components/Pages/ProductPage/ProductPage';
import {CartPage} from './Components/Pages/CartPage/CartPage';
import {FavoritePage} from './Components/Pages/FavoritePage/FavoritePage';
import {SearchPage} from './Components/Pages/SearchPage/SearchPage';
import {MainPage} from './Components/Pages/MainPage/MainPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path='/catalog/:gender/:category?' element={<MainPage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/favorite' element={<FavoritePage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigaton());
    dispatch(fetchColors());
  }, [dispatch]);

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
