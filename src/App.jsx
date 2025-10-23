import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// PAGES
import Home from "./pages/Home.jsx";
// If you have these pages already, keep them. If not, they can be simple placeholders.
import About from "./pages/About.jsx";
import Solutions from "./pages/Solutions.jsx";
import WhyHydroid from "./pages/WhyHydroid.jsx";
import Resources from "./pages/Resources.jsx";
import Contact from "./pages/Contact.jsx";  
import Login from "./pages/Login.jsx";

export default function App() {
  return (
    <Router>
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
            <Route path="/Login" element={<Login />} />            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
