import axios from "axios";

const NcGamesAPI = axios.create({
  baseURL: "https://nc-games-796w.onrender.com/",
});

export const fetchReviews = (categoryName, sortParam, orderParam) => {
  return NcGamesAPI.get(`/api/reviews`, {
    params: {
      category: categoryName,
      sort_by: sortParam === "" ? null : sortParam,
      order_by: orderParam,
    },
  })
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

export const fetchCategories = () => {
  return NcGamesAPI.get("/api/categories")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
