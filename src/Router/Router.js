import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Work from "../pages/Work/Work";
import Event from "../pages/Event/Event";
import Donation from "../pages/Donation/Donation";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/media" element={<Event />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donation" element={<Donation />} />
    </Routes>
  );
};

export default Router;
