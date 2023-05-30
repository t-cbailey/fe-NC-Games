import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Reviews from "./components/Reviews";

function App() {
  const [allReviews, SetAllReviews] = useState([]);

  return (
    <>
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
