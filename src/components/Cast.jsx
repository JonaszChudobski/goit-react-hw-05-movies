import { useParams } from 'react-router-dom';
import { fetchCast } from 'api/apiOptions';
import { useEffect, useState } from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await fetchCast(movieId);
        setCast(response.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <img src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`} alt={actor.name} />
          <p>{actor.name}</p>
          <p>Character played: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
