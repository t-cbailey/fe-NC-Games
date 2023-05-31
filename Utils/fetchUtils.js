import axios from "axios";

const NcGamesAPI = axios.create({
  baseURL: "https://nc-games-796w.onrender.com/",
});

export const fetchReviews = () => {
  return NcGamesAPI.get(`/api/reviews`)
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
