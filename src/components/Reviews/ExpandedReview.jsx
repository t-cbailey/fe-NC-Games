import { useState, useEffect } from "react";
import { fetchReviewsById } from "../../../Utils/fetchUtils";
import { useParams } from "react-router-dom";
import CommentsList from "../Comments/CommentsList";
import ReviewVoteButton from "./ReviewVoteButton";

function ExpandedReview() {
  const [currReview, setCurrReview] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    fetchReviewsById(review_id).then(({ review }) => {
      setCurrReview(review);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <p className="loading">Loading...</p>
  ) : (
    <>
      <section className="expandedReview">
        <img
          id="expandedReviewImg"
          src={currReview[0].review_img_url}
          alt={currReview[0].title}
        />
        <h3>{currReview[0].title}</h3>
        <article>{currReview[0].review_body}</article>
        <p>Category: {currReview[0].category} </p>
        <p>Reviewed by {currReview[0].owner}</p>
        <ReviewVoteButton currReview={currReview} />
      </section>
      <section className="commentsSection">
        <CommentsList review_id={currReview[0].review_id} />
      </section>
    </>
  );
}

export default ExpandedReview;
