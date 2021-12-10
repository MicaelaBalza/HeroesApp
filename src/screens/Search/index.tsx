import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from 'hooks/useForm';
import { getHeroesByName } from 'utils/heroes';

import HeroCard from 'components/HeroCard';

import './index.css';

interface HeroFormData {
  hero: string;
}

const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);
  const [values, handleInputChange] = useForm<HeroFormData>({
    hero: q as string
  });
  const { hero } = values;
  const heroesFiltered = useMemo(() => getHeroesByName(q as string), [q]);
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`?q=${hero}`);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Find your hero..."
          className="input"
          name="hero"
          value={hero}
          onChange={handleInputChange}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div>
        {q === ''
          ? <p className="empty-message">Start typing to search for your hero</p>
          : (heroesFiltered.length === 0) && <p>No heroes match {q}</p>
        }
        <div className="hero-grid">
          {heroesFiltered.length > 0 && heroesFiltered.map((hero) => (
            <HeroCard
              key={hero.superhero}
              {...hero}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
