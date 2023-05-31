import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import ExpandedReview from "./components/ExpandedReview";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<ExpandedReview />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
