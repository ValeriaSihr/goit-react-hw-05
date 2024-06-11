import { useParams, Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '../components/api';


const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state?.from || "/movies";

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  const { title, overview, poster_path } = movie;
  const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : '';

  return (
    <div>
      <button onClick={() => navigate(backLink)}>Go back</button>
      <h1>{title}</h1>
      <img src={imageUrl} alt={title} />
      <p>{overview}</p>
      <nav>
        <ul>
          <li>
            <Link to="cast" state={{ from: backLink }}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLink }}>Reviews</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
