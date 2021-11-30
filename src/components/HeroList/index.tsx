import { useMemo } from 'react';

import { getHeroesByPublisher } from 'utils/heroes';
import { Publisher } from 'types';
import HeroCard from 'components/HeroCard';

import './index.css';

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
