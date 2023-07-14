import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'api/apiOptions';
import MoviesList from 'components/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const results = await fetchTrendingMovies();
        setTrendingMovies(results.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrending();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default Home;
