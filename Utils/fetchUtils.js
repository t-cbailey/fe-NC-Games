import axios from "axios";

const NcGamesAPI = axios.create({
  baseURL: "https://nc-games-796w.onrender.com/",
});

export const fetchReviews = () => {
  return NcGamesAPI.get(`/api/reviews?sort_by=votes&order_by=desc`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchUsers = () => {
  return NcGamesAPI.get("/api/users")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchReviewsById = (review_id) => {
  return NcGamesAPI.get(`/api/reviews/${review_id}`)

    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchCommentsByReviewId = (review_id) => {
  return NcGamesAPI.get(`/api/reviews/${review_id}/comments`)

    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postCommentByReviewId = (review_id, reviewBody) => {
  return NcGamesAPI.post(`/api/reviews/${review_id}/comments`, reviewBody).then(
    (res) => {
      return res.data;
    }
  );
};

export const incrementVotes = (review_id, votesData) => {
  return NcGamesAPI.patch(`/api/reviews/${review_id}`, votesData).then(
    (res) => {
      res.data;
    }
  );
};

export const deleteCommentById = (id) => {
  return NcGamesAPI.delete(`/api/comments/${id}`);
};
