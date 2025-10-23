import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx"; // 👈 imported here

// PAGES
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Solutions from "./pages/Solutions.jsx";
import WhyHydroid from "./pages/WhyHydroid.jsx";
import Resources from "./pages/Resources.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Privacy from "./components/Privacy.jsx";
import TermsAndConditions from "./components/Terms&conditions.jsx";

export default function App() {
  return (
    <Router>
      {/* 👇 ScrollToTop must be placed inside Router but above Routes */}
      <ScrollToTop />

      <div className="app-root">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solution" element={<Solutions />} />
            <Route path="/why-hydroid" element={<WhyHydroid />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/termsandconditions" element={<TermsAndConditions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
