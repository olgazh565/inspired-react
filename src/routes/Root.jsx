import {Outlet} from 'react-router-dom';
import {Header} from '../Components/Header/Header'
import {Main} from '../Components/Layout/Main/Main';
import {Footer} from '../Components/Footer/Footer';

export const Root = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </>
);

