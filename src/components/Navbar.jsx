import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Container from "./Container.jsx";

const linkBase =
  "px-3 py-2 text-sm font-medium transition-colors duration-300";
const activeLink = "text-blue-600";
const inactiveLinkLight = "text-white"; // For transparent background
const inactiveLinkDark = "text-gray-700"; // For scrolled background

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `${linkBase} ${isActive ? activeLink : isScrolled ? inactiveLinkDark : inactiveLinkLight}`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-blue-600" />
          <span
            className={`text-lg font-bold transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Hydroid
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/solutions" className={navLinkClass}>
            Solutions
          </NavLink>
          <NavLink to="/why-hydroid" className={navLinkClass}>
            Why Hydroid
          </NavLink>
          <NavLink to="/resources" className={navLinkClass}>
            Resources
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`md:hidden inline-flex items-center justify-center rounded border px-3 py-2 text-sm transition-colors duration-300 ${
            isScrolled ? "text-gray-800 border-gray-400" : "text-white border-white"
          }`}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? "✖" : "☰"}
        </button>
      </Container>

      {/* Mobile nav */}
      {open && (
        <div
          className={`md:hidden border-t transition-all duration-300 ${
            isScrolled ? "bg-white border-gray-200" : "bg-black/70"
          }`}
        >
          <Container className="py-2 grid gap-1">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={navLinkClass}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              About
            </NavLink>
            <NavLink
              to="/solutions"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              Solutions
            </NavLink>
            <NavLink
              to="/why-hydroid"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              Why Hydroid
            </NavLink>
            <NavLink
              to="/resources"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              Resources
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className={navLinkClass}
            >
              Contact
            </NavLink>
          </Container>
        </div>
      )}
    </header>
  );
}
