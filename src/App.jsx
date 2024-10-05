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
import SwitchShowcase from "./pages/SwitchShowcase";
import TableShowcase from "./pages/TableShowcase";
import Pages from "./pagesComponents/PageShowcase";
import HomePageShowcase from "./pagesComponents/PageShowcase/HomePageShowcase";
import AboutPageShowcase from "./pagesComponents/PageShowcase/AboutPageShowcase";
import ServicePageShowcase from "./pagesComponents/PageShowcase/ServicePageShowcase";
import ContactPageShowcase from "./pagesComponents/PageShowcase/ContactPageShowcase";
import DashboardPageShowcase from "./pagesComponents/PageShowcase/DashboardPageShowcase";
import PricingShowcase from "./pages/PricingShowcase";
import ErrorPageShowcase from "./pagesComponents/PageShowcase/ErrorPageShowcase";
import EcomPageShowcase from "./pagesComponents/PageShowcase/EcomPageShowcase";

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
        <Route path="/components/switch" element={<SwitchShowcase />} />
        <Route path="/components/tables" element={<TableShowcase />} />
        <Route path="/components/pricing" element={<PricingShowcase />} />

        {/* Pages Component  */}
        <Route path="/pages" element={<Pages />} />
        <Route path="/pages/home" element={<HomePageShowcase />} />
        <Route path="/pages/about" element={<AboutPageShowcase />} />
        <Route path="/pages/service" element={<ServicePageShowcase />} />
        <Route path="/pages/contact" element={<ContactPageShowcase />} />
        <Route path="/pages/dashboard" element={<DashboardPageShowcase />} />
        <Route path="/pages/error" element={<ErrorPageShowcase />} />
        <Route path="/pages/ecommerce" element={<EcomPageShowcase />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
