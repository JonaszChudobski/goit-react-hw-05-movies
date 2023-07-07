import { useParams } from 'react-router-dom';

export const Cast = () => {
    const { movieId } = useParams();
    const cast = ;
    return (
        <ul>
            {cast.map((actor) => (
                <li key=''>
                    <img src='' alt='' />
                    <p>{actor.name}</p>
                </li>
            ))}
        </ul>
    )
}