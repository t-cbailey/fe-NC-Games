import { fetchReviews } from "../../Utils/fetchUtils";
import { useEffect } from "react";
import ReviewCard from "./ReviewCard";

function Reviews({ SetAllReviews, allReviews }) {
  useEffect(() => {
    fetchReviews().then(({ reviews }) => {
      SetAllReviews(reviews);
    });
  }, []);

  return (
    <>
      <h2>Reviews</h2>
      <ul className="reviewList">
        {allReviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </>
  );
}
export default Reviews;
