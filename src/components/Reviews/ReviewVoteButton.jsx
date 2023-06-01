import { useState } from "react";
import { incrementVotes } from "../../../Utils/fetchUtils";

function ReviewVoteButton({ currReview }) {
    const [votes, SetVotes] = useState(currReview[0].votes);

    //add user specific disables in BE!
    const [upDisabled, SetUpDisabled] = useState(false)
    const [downDisabled, SetDownDisabled] = useState(false)

    const inc = { inc_votes: 1 }

    function handleClick(event) {

        if (event.target.name === 'upVote') {
            inc.inc_votes = 1
            SetVotes((currVotes) => currVotes + 1)
            SetUpDisabled(true)
        }
        if (event.target.name === 'downVote') {
            inc.inc_votes = -1
            SetVotes((currVotes) => currVotes - 1)
            SetDownDisabled(true)
        }



        incrementVotes(currReview[0].review_id, inc);
    }

    return (
        <>
            <p>Votes {votes}</p>
            <div>
                <button name="upVote" onClick={handleClick} disabled={upDisabled}>
                    UpVote
                </button>
                <button name="downVote" onClick={handleClick} disabled={downDisabled}>
                    DownVote
                </button>
            </div>
        </>
    );
}

export default ReviewVoteButton;
