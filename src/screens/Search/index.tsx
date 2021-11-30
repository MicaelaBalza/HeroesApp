import { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "hooks/useForm";

import { getHeroesByName } from "utils/heroes";
import HeroCard from "../heroes/HeroCard/HeroCard";

import './SearchScreen.css';

interface HeroFormData {
  hero: string;
}

const SearchScreen = () => {
  const history = useHistory();
  const query = history.location.search.slice(3);
  const [values, handleInputChange] = useForm<HeroFormData>({
    hero: query
  });
  const { hero } = values;
  const heroesFiltered = useMemo(() => getHeroesByName(query), [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    history.push(`?q=${hero}`);
  }

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
        { query === '' && <p className="empty-message">Start typing to search for your hero</p> }
        {(query !== '' && heroesFiltered.length === 0) && <p>No heroes match {query}</p>}
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
  )
}

export default SearchScreen;
