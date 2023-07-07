import { Link } from 'react-router-dom';
import { Container } from './App.styled';

export const MoviesList = ({ movies }) => {
  return (
    <Container>
      {movies.map(movie => (
        <Link to={`${movie.id}`} key={movie.id}>
          {movie.name}
        </Link>
      ))}
    </Container>
  );
};
