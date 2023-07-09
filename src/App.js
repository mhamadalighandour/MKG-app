import React from "react";
import { Footer, Hero, Navbar } from "./components/index";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  PageProThree,
  PageSections,
  PageSerTh,
  PageTwo,
  Projects,
  Services,
} from "./pages/index";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="aa">
        <Routes>
          <Route path="/*" element={<h1>not defined page</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<PageSections />} />
          <Route path="services/sections/:idT" element={<PageSerTh />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<PageTwo />} />
          <Route path="projects/sections/:id" element={<PageProThree />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
