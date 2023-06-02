import { useEffect, useState } from "react";
import { fetchCommentsByReviewId } from "../../../Utils/fetchUtils";
import CommentCard from "./CommentCard";
import PostNewComment from "../Comments/PostNewComment";

function CommentsList({ review_id }) {
  const [comments, SetComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);






  useEffect(() => {
    fetchCommentsByReviewId(review_id).then(({ comments }) => {
      SetComments(comments);
      setIsLoading(false);
    });
  }, []);


  if (isLoading === true) {
    <h3>Comments</h3>
    return <p className="loading">Loading...</p>
  } else
    return (
      <>
        <h3>Comments</h3>
        {comments.length < 1 ? (
          <p>No Comments...</p>
        ) : (
          <ul className="commentsList">
            {comments.map((comment) => {
              return <CommentCard key={comment.comment_id} comment={comment} />;
            })}
          </ul>
        )}
      </>
    );

}

export default CommentsList;
