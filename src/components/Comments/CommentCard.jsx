function CommentCard({ comment }) {
  return (
    <>
      <section className="commentCard">
        <li className="commentCardText">{comment.author}</li>
        <li className="commentCardText">{comment.body}</li>
        <li className="commentCardText">Votes: {comment.votes || 0}</li>
      </section>
    </>
  );
}

export default CommentCard;
