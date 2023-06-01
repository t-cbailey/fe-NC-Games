import { useContext, useState } from "react"
import { UserContext } from "../../../Utils/UserContext";
import { postCommentByReviewId } from "../../../Utils/fetchUtils";




function PostNewComment({ review_id, SetComments }) {
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
        postCommentByReviewId(review_id, newComment, setIsError).catch((err) => {
            setCommentBody('')
            setIsError(true)
            SetComments((currList) => {
                currList.shift();

                return [...currList]
            })
        })

    }






    return <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="commentBody">comment input</label>
            <input
                id="commentBody"
                type="text"
                required
                name="commentBody"
                onChange={handleInputChange}
                value={commentBody}

            ></input>
            <button>Submit</button>
            {isError ? (<p className="errormsg">something went wrong, refresh the page and try again!</p>) : null}
        </form>
    </>
}

export default PostNewComment