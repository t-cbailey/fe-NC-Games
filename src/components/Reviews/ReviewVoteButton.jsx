import { useState } from "react";
import { incrementVotes } from "../../../Utils/fetchUtils";

function ReviewVoteButton({ currReview }) {
    const [votes, SetVotes] = useState(currReview[0].votes);

    //add user specific disables in BE!
    const [upDisabled, SetUpDisabled] = useState(false)
    const [downDisabled, SetDownDisabled] = useState(false)
    const [isError, SetIsError] = useState()

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



        incrementVotes(currReview[0].review_id, inc, SetIsError);
    }

    return (
        <>
            <p>Votes {votes}</p>
            <div className="voteButtonContainer">
                <button className="voteButtons" name="upVote" onClick={handleClick} disabled={upDisabled}>
                    UpVote
                </button>
                <button className="voteButtons" name="downVote" onClick={handleClick} disabled={downDisabled}>
                    DownVote
                </button>
                {isError ? (<p className="errormsg">something went wrong, refresh the page and try again!</p>) : null}
            </div>
        </>
    );
}

export default ReviewVoteButton;
