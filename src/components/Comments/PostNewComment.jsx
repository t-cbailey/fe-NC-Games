import { useContext, useState } from "react"
import { UserContext } from "../../../Utils/UserContext";
import { postCommentByReviewId } from "../../../Utils/fetchUtils";




function PostNewComment({ review_id, SetComments, SetCurrCommentId, isDisabled, setIsDisabled }) {
    const { user, setUser } = useContext(UserContext);
    const [commentBody, setCommentBody] = useState('')
    const [isError, setIsError] = useState()

    const handleInputChange = (event) => {
        setCommentBody(event.target.value)

    }


    const handleSubmit = (event) => {

        event.preventDefault()
        const newComment = {

            author: user.username,
            body: commentBody,

        }

        SetComments((currList) => [newComment, ...currList])
        setCommentBody('')
        postCommentByReviewId(review_id, newComment, setIsError).then((res) => {
            setIsDisabled(true)

            SetCurrCommentId(res.commentData[0].comment_id)

        }).catch((err) => {
            setCommentBody('')
            setIsError(true)
            SetComments((currList) => {
                currList.shift();
                setIsDisabled(true)
                return [...currList]
            })
        })

    }






    return <>
        <form className='commentForm' onSubmit={handleSubmit}>

            <textarea

                id="commentBody"
                type="text"
                required
                name="commentBody"
                onChange={handleInputChange}
                value={commentBody}
                className="commentInputBody"
                placeholder="write a comment..."

            ></textarea>
            <button disabled={isDisabled} className="commentSubmit">Submit</button>
            {isError ? (<p className="errormsg">something went wrong, refresh the page and try again!</p>) : null}
        </form>
    </>
}

export default PostNewComment