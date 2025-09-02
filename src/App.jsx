import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// PAGES
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Solutions from "./pages/Solutions.jsx";
import WhyHydroid from "./pages/WhyHydroid.jsx";
import Resources from "./pages/Resources.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/why-hydroid" element={<WhyHydroid />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
