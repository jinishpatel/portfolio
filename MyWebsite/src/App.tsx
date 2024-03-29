// import { useState } from "react";
// import React from "react";
import "./App.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import GitHub from "./routes/GitHub";
import Project from "./routes/Project";
import Resume from "./routes/Resume";
import About from "./routes/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/GitHub" element={<GitHub />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Resume" element={<Resume />} />
    </Routes>
    // <div><span>hello jinish</span></div>
  );
}

export default App;
