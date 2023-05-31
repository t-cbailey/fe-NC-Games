import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Reviews from "./components/Reviews/Reviews";
import UserPage from "./components/Users/UserPage";
import { UserContext } from "../Utils/UserContext";

function App() {
  const [allReviews, SetAllReviews] = useState([]);
  const [user, setUser] = useState({
    username: "guest",
    avatar_url:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/reviews"
            element={
              <Reviews SetAllReviews={SetAllReviews} allReviews={allReviews} />
            }
          />
          <Route path="/users" element={<UserPage />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
