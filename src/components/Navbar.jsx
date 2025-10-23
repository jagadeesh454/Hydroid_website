import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT US" },
    { path: "/solution", label: "SOLUTION" },
    { path: "/why-hydroid", label: "WHY HYDROID", scrollTo: "features" },
    { path: "/resources", label: "RESOURCES" },
    { path: "/contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // utility: try to find element with id, data-scroll-id, name
  const findScrollTarget = (targetName) => {
    if (!targetName) return null;
    return (
      document.getElementById(targetName) ||
      document.querySelector(`[data-scroll-id="${targetName}"]`) ||
      document.querySelector(`[name="${targetName}"]`)
    );
  };

  // handle click for nav items that request scrolling
  // handle click for nav items that request scrolling
const handleScrollNav = (e, path, targetName = "features") => {
  if (e && e.preventDefault) e.preventDefault();

  // ✅ If destination is WHY HYDROID, skip scroll state so it always opens at the top
  if (path === "/why-hydroid") {
    if (location.pathname === path) {
      // already on page → scroll to top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // navigating to the page → open without scroll target
      navigate(path);
    }
    return;
  }

  // same logic as before for other pages
  if (location.pathname === path) {
    const el = findScrollTarget(targetName);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top, behavior: "smooth" });
    }
    return;
  }

  navigate(path, { state: { scrollTo: targetName } });
};


  const isActive = (path) => location.pathname === path;

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-row">
        <div className="brand">
          <Link to="/">Hydroid</Link>
        </div>

        <nav className="nav-desktop" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                {item.scrollTo ? (
                  <a
                    href={item.path}
                    onClick={(e) => handleScrollNav(e, item.path, item.scrollTo)}
                    className={isActive(item.path) ? "active" : ""}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.path} className={isActive(item.path) ? "active" : ""}>
                    {item.label}
                  </Link>
                )}
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
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              {item.scrollTo ? (
                <a href={item.path} onClick={(e) => handleScrollNav(e, item.path, item.scrollTo)}>
                  {item.label}
                </a>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
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
