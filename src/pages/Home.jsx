import { MoviesList } from "components/MoviesList";

export const Home = () => {
    const trendingMovies = ;
    return (
        <div>
            <h1>Trending today</h1>
            <MoviesList movies={trendingMovies} />
        </div>
    )
}