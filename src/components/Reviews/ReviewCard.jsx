import { useNavigate } from "react-router-dom";

function ReviewCard({ review }) {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate(`/reviews/${event.target.name}`);
  }

  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      handleClick(event);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        onKeyDown={handleKeypress}
        type="button"
        className="reviewCard"
        name={review.review_id}
      >
        <img
          src={review.review_img_url}
          alt={review.name}
          className="reviewCardImage"
          name={review.review_id}
        />
        <section className="reviewCardText">
          <li>{review.title}</li>
          <li>Votes: {review.votes}</li>
          <li>Comments:{review.comment_count}</li>
        </section>
      </button>
    </>
  );
}
export default ReviewCard;
