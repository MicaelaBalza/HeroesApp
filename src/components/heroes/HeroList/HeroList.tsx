import { useMemo } from 'react';

import { getHeroesByPublisher } from '../../../selectors/getHeroesByPublisher';
import { Publisher } from '../../../utils/types';
import HeroCard from '../HeroCard/HeroCard';

import './HeroList.css';

interface Props {
  publisher: Publisher
}

const HeroList = ({ publisher }: Props) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="hero-grid animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          {...hero}
        />
      ))}
    </div>
  )
}

export default HeroList;
