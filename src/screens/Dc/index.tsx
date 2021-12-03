import HeroList from 'components/HeroList';
import { Publisher } from 'types';

const DcScreen = () => {
  return (
    <div>
      <HeroList publisher={Publisher.DCComics} />
    </div>
  );
};

export default DcScreen;
