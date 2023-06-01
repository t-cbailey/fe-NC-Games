import { useContext, useState } from "react"
import { UserContext } from "../../../Utils/UserContext";
import { postCommentByReviewId } from "../../../Utils/fetchUtils";




function PostNewComment({ review_id, SetComments }) {
    const { user, setUser } = useContext(UserContext);
    const [commentBody, SetCommentBody] = useState('')

    const handleInputChange = (event) => {
        SetCommentBody(event.target.value)

    }


    const handleSubmit = (event) => {

        event.preventDefault()
        const newComment = {
            username: user.username,
            body: commentBody
        }
        postCommentByReviewId(review_id, newComment).then((newCommFromApi) => {
            const response = newCommFromApi.request.response
            console.log(response)



            SetComments((currComments) => { console.log(currComments);[newCommFromApi.request.response, ...currComments] })
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

            ></input>
            <button>Submit</button>
        </form>
    </>
}

export default PostNewComment