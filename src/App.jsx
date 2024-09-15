import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/AppUI/Navbar";
import Home from "./pages/Home";
import ComponentShowcase from "./pages/ComponentShowcase";
import Component from "./pages/Component";
import CardShowcase from "./pages/CardShowcase";
import InputShowcase from "./pages/InputShowcase";
import AvatarShowcase from "./pages/AvtarShowcase";
import SigninShowcase from "./pages/SigninShowcase";
import About from "./pages/About";
import { Footer } from "./components/AppUI/Footer";
import SignupShowcase from "./pages/SignupShowcase";
import LoaderShowcase from "./pages/LoaderShowcase";

import NavbarShowcase from "./pages/NavbarShowcase";
import FooterShowcase from "./pages/FooterShowcase";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/components" element={<Component />} />
        <Route path="/components/buttons" element={<ComponentShowcase />} />
        <Route path="/components/cards" element={<CardShowcase />} />
        <Route path="/components/inputs" element={<InputShowcase />} />
        <Route path="/components/avatars" element={<AvatarShowcase />} />
        <Route path="/components/signin" element={<SigninShowcase />} />
        <Route path="/components/signup" element={<SignupShowcase />} />
        <Route path="/components/loaders" element={<LoaderShowcase />} />
        <Route path="/components/navbars" element={<NavbarShowcase />} />
        <Route path="/components/footers" element={<FooterShowcase />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
