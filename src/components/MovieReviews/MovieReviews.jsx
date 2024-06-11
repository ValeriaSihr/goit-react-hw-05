import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../api';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p><b>{author}</b></p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
