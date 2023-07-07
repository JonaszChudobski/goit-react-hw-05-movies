import { useParams } from 'react-router-dom';

export const Reviews = () => {
    const { movieId } = useParams();
    const reviews = ;
    return (
        reviews ? <ul>
            {reviews.map((review) => (
<li key=''>
{review}
                </li>
            ))
                } : <p>There is no review yet for this movie</p>
        </ul>
    )
}