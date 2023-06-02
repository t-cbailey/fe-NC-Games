import { fetchReviews } from "../../../Utils/fetchUtils";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Filters from "./Filters/Filters";


function Reviews() {
  const [allReviews, SetAllReviews] = useState([]);
  const [category, SetCategory] = useState('')
  console.log(category)

  useEffect(() => {
    fetchReviews(category).then(({ reviews }) => {
      SetAllReviews(reviews);
      setIsLoading(false);
    });
  }, [category]);



  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <Filters SetCategory={SetCategory} />
      <h2>{category} reviews</h2>
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
