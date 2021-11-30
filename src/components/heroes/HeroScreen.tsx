import { useMemo } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";

import { getHeroById } from "src/selectors/getHeroById";

import './HeroScreen.css';

interface HeroScreenParams {
  heroId: string;
}

const HeroScreen = () => {
  const history = useHistory();
  const { heroId } = useParams<HeroScreenParams>();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  if (!hero) {
    return <Redirect to="/" />;
  }

  const { superhero, publisher, first_appearance, characters } = hero;

  const handleBack = () => {
    const pub = publisher.toLowerCase().split(' ')[0];
    if (history.length < 3) {
      history.push(`/${pub}`);
    } else {
      history.goBack();
    }
  };

  return (
    <div className="hero-container">
      <img
        src={`../assets/heroes/${heroId}.jpg`}
        alt={superhero}
        className="hero-img animate__animated animate__slideInLeft"
      />
      <div className="hero-info">
        <p>{superhero}</p>
        <div className="info-item">
          <p className="name">Primera aparición</p>
          <p className="info">{first_appearance}</p>
        </div>
        <div className="info-item">
          <p className="name">Personaje(s)</p>
          <p className="info">{characters}</p>
        </div>
        <button className="back-btn" onClick={handleBack}>
          Volver
        </button>
      </div>
    </div>
  )
}

export default HeroScreen;
