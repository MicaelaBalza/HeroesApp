import { Link } from 'react-router-dom';

import './index.css';

interface Props {
  key?: string,
  id: string,
  superhero: string,
  alter_ego: string,
  first_appearance: string,
  characters: string
}

const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }: Props) => {
  return (
    <div className="hero-card">
      <img src={require(`../../../assets/img/heroes/${id}.jpg`).default} alt={superhero} className="hero-img" />
      <p className="superhero">{superhero}</p>
      {alter_ego !== characters && <p>{alter_ego}</p>}
      <div className="info-item">
        <p className="name">Primera aparición</p>
        <p className="info">{first_appearance}</p>
      </div>
      <div className="info-item">
        <p className="name">Personaje(s)</p>
        <p className="info">{characters}</p>
      </div>
      <Link to={`/hero/${id}`} className="more-button">+ Ver más</Link>
    </div>
  )
}

export default HeroCard
