function ReviewCard({ review }) {
  return (
    <>
      <section className="reviewCard">
        <img
          src={review.review_img_url}
          alt={review.name}
          className="reviewListImage"
        />
        <li>{review.title}</li>
        <li>Votes: {review.votes}</li>
        <li>Comments:{review.comment_count}</li>
      </section>
    </>
  );
}
export default ReviewCard;
