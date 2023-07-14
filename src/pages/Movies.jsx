import { fetchMovieByName } from 'api/apiOptions';
import { useEffect, useState } from 'react'; //eslint-disable-next-line
import { useLocation, useSearchParams } from 'react-router-dom';
import { Container } from 'components/App.styled';
import MoviesList from 'components/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();

  useEffect(() => {
    const query = params.get('query') ?? '';
    if (!query) {
      return;
    }

    const fetchMovie = async () => {
      try {
        const result = await fetchMovieByName(query);
        if (!result) {
          setMovies([]);
        } else {
          setMovies(result.results);
        }
      } catch (error) {
        console.log(error);
        setMovies([]);
      }
    };
    fetchMovie();
  }, [params]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setParams({ query: form.elements.query.value });
  };

  return (
    <Container>
      <h2>Movies Page</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {movies !== [] ? (
        <MoviesList movies={movies} />
      ) : (
        <p>No movies to be shown</p>
      )}
    </Container>
  );
};

export default Movies;
