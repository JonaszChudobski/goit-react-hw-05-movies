import { useParams, Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
    const { movieId } = useParams();
    const movie = ;
    return (
        <main>
            <img src='' alt='' />
            <div>
                <h2>{movie.name}</h2>
                <p>User score: {movie.score}</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h4>Genres</h4>
                <p>{movie.genres }</p>
            </div>
        <div>
            <ul>
                <li>
                    <Link to='cast'>Cast</Link>
                </li>
                <li>
                    <Link to='reviews'>Reviews</Link>
                </li>
            </ul>
            <Outlet />
            </div>
            </main>
    )
}