import HeroList from 'components/HeroList';
import { Publisher } from 'types';

const MarvelScreen = () => {
  return (
    <div>
      <HeroList publisher={Publisher.MarvelComics} />
    </div>
  );
};

export default MarvelScreen;
