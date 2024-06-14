import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css'

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.mainAllMovies}>
      {movies.map(({ id, title, poster_path }) => (
        <li className={css.movieItem} key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {poster_path && <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title} />}
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
