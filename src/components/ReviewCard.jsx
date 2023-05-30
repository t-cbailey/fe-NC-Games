import { useNavigate } from "react-router-dom";

function ReviewCard({ review }) {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate(`/reviews/${event.target.name}`);
  }

  return (
    <>
      <button onClick={handleClick} type="button" className="reviewCard">
        <img
          src={review.review_img_url}
          alt={review.name}
          className="reviewListImage"
          name={review.review_id}
        />
        <li>{review.title}</li>
        <li>Votes: {review.votes}</li>
        <li>Comments:{review.comment_count}</li>
      </button>
    </>
  );
}
export default ReviewCard;
