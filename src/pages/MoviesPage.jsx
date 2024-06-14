import { useState } from 'react';
import { searchMovies } from '../components/api';
import MovieList from '../components/MovieList/MovieList';
import css from './MoviesPage.module.css'

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div className={css.searchBar}>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input className={css.input} 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for movies" 
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
