import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieById } from 'api/apiOptions';
import { useEffect, useState } from 'react';
import { Container } from 'components/App.styled';
import SelectedMovie from 'components/SelectedMovie';
import { Div } from 'components/App.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState({});
  const currentLocation = location.state.from;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const result = await fetchMovieById(movieId);
        setMovieDetails(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
  }, [movieId]);

  return (
    <main>
      <Container>
        <Div>
          <Link to={location.state.from}>
            <button type="button">Go back</button>
          </Link>
        </Div>
        <SelectedMovie movie={movieDetails} />
        <ul>
          <li>
            <Link to="cast" state={{ from: currentLocation }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: currentLocation }}>
              Reviews
            </Link>
          </li>
        </ul>
        <div>
          <Outlet />
        </div>
      </Container>
    </main>
  );
};

export default MovieDetails;
