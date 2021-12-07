/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-var-requires */
import { useMemo } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';

import { getHeroById } from 'utils/heroes';

import './index.css';

const HeroScreen = () => {
  const navigate = useNavigate();
  const { id } = useParams<'id'>();
  const hero = useMemo(() => getHeroById(id!), [id]);
  if (!hero) {
    return <Navigate to="/" />;
  }

  const { superhero, publisher, first_appearance, characters } = hero;

  const handleBack = () => {
    const pub = publisher.toLowerCase().split(' ')[0];
    if (history.length < 3) {
      navigate(`/${pub}`);
    }
    console.log(navigate);
    navigate(-1);
  };

  return (
    <div className="hero-container">
      <img
        src={require(`../../assets/img/heroes/${id}.jpg`).default}
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
  );
};

export default HeroScreen;
