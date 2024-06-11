import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../api';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            {profile_path && <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />}
            <p>{name} as {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
