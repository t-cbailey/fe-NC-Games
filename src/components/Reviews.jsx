import { fetchReviews } from "../../Utils/fetchUtils";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

function Reviews({ SetAllReviews, allReviews }) {
  useEffect(() => {
    fetchReviews().then(({ reviews }) => {
      SetAllReviews(reviews);
      setIsLoading(false);
    });
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <h2>Reviews</h2>
      <ul className="reviewList">
        {isLoading ? (
          <p className="loading">loading...</p>
        ) : (
          allReviews.map((review) => {
            return <ReviewCard key={review.review_id} review={review} />;
          })
        )}
      </ul>
    </>
  );
}
export default Reviews;
