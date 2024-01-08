import {Gender} from './Gender/Gender';
import {Category} from './Category/Category';
import {Container} from '../../Layout/Container/Container';

export const Navigation = () => {
  return (
    <nav>
      <Container>
        <Gender />
        <Category />
      </Container>
    </nav>
  );
};
