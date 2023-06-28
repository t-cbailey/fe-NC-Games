import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Reviews from "./components/Reviews/Reviews";
import UserPage from "./components/Users/UserPage";
import ExpandedReview from "./components/Reviews/ExpandedReview";

import { UserContext } from "../Utils/UserContext";

function App() {
  const [user, setUser] = useState({
    username: "guest",
    avatar_url:
      "../assets/guestIcon.png",
  });

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<ExpandedReview />} />
          <Route path="/users" element={<UserPage />} />
          <Route path='/reviews/categories/:category' element={<Reviews />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
