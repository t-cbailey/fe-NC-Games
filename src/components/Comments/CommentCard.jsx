import { useContext, useState } from "react";
import { UserContext } from "../../../Utils/UserContext";
import { deleteCommentById } from "../../../Utils/fetchUtils";




function CommentCard({ comment, SetComments, currCommentId, setIsDisabled }) {


  const { user } = useContext(UserContext);
  const [isError, SetIsError] = useState(false)
  const [deleteMsg, setDeleteMsg] = useState(null)


  const handleClick = (event) => {

    if (event.target.value) {
      deleteCommentById(event.target.value).then(() => {
        setDeleteMsg(<p>comment deleted</p>)
      }
      ).catch((err) => {
        SetIsError(err)
      })
      setIsDisabled(false)
    } else {
      SetComments((currComments) => {
        const tempArr = [...currComments]
        tempArr.shift()
        deleteCommentById(currCommentId)
        setIsDisabled(false)

        return tempArr

      })
    }

  }

  return (
    <>

      {deleteMsg ? <section className="commentCard">{deleteMsg}</section> :
        <section className="commentCard">
          <li className="commentCardText">{comment.author}</li>
          <li className="commentCardText">{comment.body}</li>
          <li className="commentCardText">Votes: {comment.votes || 0}</li>
          {comment.author === user.username ? <button value={comment.comment_id} onClick={handleClick}>❌</button> : null}
        </section>
      }
    </>
  );
}

export default CommentCard;
