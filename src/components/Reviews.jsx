import { useParams } from 'react-router-dom';
import { fetchReviews } from 'api/apiOptions';
import { useEffect, useState } from 'react';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const reviews = async () => {
      try {
        const response = await fetchReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    reviews();
  }, [movieId]);

  return reviews.length ? (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>{review.author}:</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>There is no review yet for this movie</p>
  );
};

export default Reviews;
