import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile menu toggle
  const [resourcesOpen, setResourcesOpen] = useState(false); // dropdown toggle
  const location = useLocation();
  const navigate = useNavigate();
  const resourcesRef = useRef(null);

  // nav items (match your App.jsx routes: use lowercase /resources)
  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT US" },
    { path: "/solution", label: "SOLUTION" },
    { path: "/why-hydroid", label: "WHY HYDROID", scrollTo: "features" },
    { path: "/resources", label: "RESOURCES" },
    { path: "/contact", label: "CONTACT" },
  ];

  // Resource links changed to query-based targets that land on /resources
  const resourcesItems = [
    { path: "/resources?tab=faq", label: "FAQ", tab: "faq" },
    { path: "/resources?tab=case", label: "Case Studies", tab: "case" },
  ];

  // add header shadow on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus when the route changes
  useEffect(() => {
    setOpen(false);
    setResourcesOpen(false);
  }, [location.pathname, location.search]);

  // close dropdown on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target)) {
        setResourcesOpen(false);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") setResourcesOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // smooth scroll for WHY HYDROID
  const handleWhyHydroidClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      scroller.scrollTo("features", { smooth: true, duration: 800, offset: -70 });
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("features", { smooth: true, duration: 800, offset: -70 });
      }, 300);
    }
  };

  // Navigate to /resources with query param. Use navigate so SPA stays in-app.
  // If user middle-clicks or opens in new tab, the Link default will handle it.
  const onResourceSelect = (path, tab) => {
    // close menus immediately
    setResourcesOpen(false);
    setOpen(false);

    // Prefer SPA navigation to keep app state
    navigate(path, { replace: false });
    // Scroll to top after short delay to ensure the page has rendered
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 120);
  };

  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-row">
        {/* Brand */}
        <div className="brand">
          <Link to="/">Hydroid</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-desktop" aria-label="Primary navigation">
          <ul>
            {navItems.map((item) => {
              if (item.label === "RESOURCES") {
                return (
                  <li
                    className="nav-dropdown"
                    key={item.path}
                    ref={resourcesRef}
                    aria-haspopup="true"
                  >
                    <button
                      className="dropdown-toggle"
                      aria-haspopup="menu"
                      aria-expanded={resourcesOpen}
                      onClick={() => setResourcesOpen((v) => !v)}
                    >
                      {item.label}
                      <span className={`chev ${resourcesOpen ? "open" : ""}`} />
                    </button>

                    {resourcesOpen && (
                      <ul className="dropdown-menu" role="menu" aria-label="Resources submenu">
                        {resourcesItems.map((r) => (
                          <li key={r.path} role="none">
                            {/* Link supports middle-click / open in new tab; click handler does SPA navigate */}
                            <Link
                              role="menuitem"
                              className="dropdown-item"
                              to={r.path}
                              onClick={(e) => {
                                // if user used modifier (middle-click/ctrl/cmd), let Link handle it (do not preventDefault)
                                const isModified = e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1;
                                if (isModified) return;
                                e.preventDefault();
                                onResourceSelect(r.path, r.tab);
                              }}
                            >
                              {r.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.path}>
                  {item.scrollTo ? (
                    <a href={item.path} onClick={handleWhyHydroidClick}>
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.path}>{item.label}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions (right) */}
        <div className="nav-actions">
          <Link to="/login" className="login-link" aria-label="Login">
            LOGIN
          </Link>

          <button className="icon-btn" aria-label="Search">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <button
            className={`hamburger ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <ul>
          {navItems.map((item) => {
            if (item.label === "RESOURCES") {
              return (
                <li className="mobile-resources" key={item.path}>
                  <button
                    className="mobile-res-toggle"
                    aria-expanded={resourcesOpen}
                    onClick={() => setResourcesOpen((v) => !v)}
                  >
                    RESOURCES
                    <span className={`chev ${resourcesOpen ? "open" : ""}`} />
                  </button>

                  {resourcesOpen && (
                    <ul className="mobile-res-list">
                      {resourcesItems.map((r) => (
                        <li key={r.path}>
                          <Link
                            className="mobile-res-item"
                            to={r.path}
                            onClick={(e) => {
                              const isModified = e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1;
                              if (isModified) return;
                              e.preventDefault();
                              onResourceSelect(r.path, r.tab);
                            }}
                          >
                            {r.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={item.path}>
                {item.scrollTo ? (
                  <a href={item.path} onClick={handleWhyHydroidClick}>
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.path}>{item.label}</Link>
                )}
              </li>
            );
          })}

          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
