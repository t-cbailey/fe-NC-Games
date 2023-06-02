import { useEffect, useState } from "react";
import { fetchCommentsByReviewId } from "../../../Utils/fetchUtils";
import CommentCard from "./CommentCard";
import PostNewComment from "../Comments/PostNewComment";

function CommentsList({ review_id }) {
  const [comments, SetComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currCommentId, SetCurrCommentId] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)






  useEffect(() => {
    fetchCommentsByReviewId(review_id).then(({ comments }) => {
      SetComments(comments);
      setIsLoading(false);
    });
  }, []);


  return (
    <>
      <h3>Comments</h3>
      <section className="addComment">
        <PostNewComment review_id={review_id} SetComments={SetComments} SetCurrCommentId={SetCurrCommentId} isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
      </section>
      {comments.length < 1 ? (
        <p>No Comments...</p>
      ) : (
        <ul className="commentsList">
          {comments.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} SetComments={SetComments} currCommentId={currCommentId} setIsDisabled={setIsDisabled} />;
          })}
        </ul>
      )}
    </>
  );

}

export default CommentsList;
