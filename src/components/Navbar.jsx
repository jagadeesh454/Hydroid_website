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

  // nav items (match your App routes)
  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT US" },
    { path: "/solution", label: "SOLUTION" },
    { path: "/why-hydroid", label: "WHY HYDROID", scrollTo: "features" },
    { path: "/resources", label: "RESOURCES" },
    { path: "/contact", label: "CONTACT" },
  ];

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

  // navigate to /resources while keeping SPA behavior
  const onResourceSelect = (path, tab) => {
    setResourcesOpen(false);
    setOpen(false);
    navigate(path, { replace: false });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 120);
  };

  const findScrollTarget = (targetName) => {
    if (!targetName) return null;
    return (
      document.getElementById(targetName) ||
      document.querySelector(`[data-scroll-id="${targetName}"]`) ||
      document.querySelector(`[name="${targetName}"]`)
    );
  };

  // handle click for nav items that request scrolling
  const handleScrollNav = (e, path, targetName = "features") => {
    if (e && e.preventDefault) e.preventDefault();

    // special handling for WHY HYDROID (example)
    if (path === "/why-hydroid") {
      if (location.pathname === path) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(path);
      }
      return;
    }

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
                            <Link
                              role="menuitem"
                              className="dropdown-item"
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
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
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
                  <a href={item.path} onClick={(e) => { setOpen(false); handleScrollNav(e, item.path, item.scrollTo); }}>
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.path} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}

          <li>
            <Link to="/login" onClick={() => setOpen(false)}>LOGIN</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
