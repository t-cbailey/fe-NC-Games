import { useEffect, useState } from "react";
import { fetchCommentsByReviewId } from "../../../Utils/fetchUtils";
import CommentCard from "./CommentCard";

function CommentsList({ review_id }) {
  const [comments, SetComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByReviewId(review_id).then(({ comments }) => {
      SetComments(comments);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h3>Comments</h3>

      <ul className="commentsList">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </>
  );
}

export default CommentsList;
