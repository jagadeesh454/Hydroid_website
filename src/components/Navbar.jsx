import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT US" },
    { path: "/solutions", label: "SOLUTION" },
    { path: "/why-hydroid", label: "WHY HYDROID" },
    { path: "/resources", label: "RESOURCES" },
    { path: "/contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-row">
        <div className="brand">
          <Link to="/">Hydroid</Link>
        </div>

        <nav className="nav-desktop" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="login-link">
            LOGIN
          </Link>

          <button className="icon-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button
            className={`hamburger ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
