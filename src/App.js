import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";

import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          {/* Umleitung von "/" auf "/home" */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
