import PropTypes from 'prop-types';

const SelectedMovie = ({ movie }) => {
  const { title, poster_path, vote_average, overview, genres } = movie;
  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`${title} poster`}
        width={200}
        height={340}
      />
      <div>
        <h2>{title}</h2>
        <p>User score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        {genres && (
          <div>
            <h4>Genres</h4>
            {genres.map(genre => genre.name).join(', ')}
          </div>
        )}
      </div>
    </>
  );
};

export default SelectedMovie;

SelectedMovie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string })
    ),
  }).isRequired,
};
