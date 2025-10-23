// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer
      className="site-footer"
      role="contentinfo"
      aria-label="Hydroid Footer"
    >
      <motion.div
        className="footer-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        {/* -------------------- TOP SECTION -------------------- */}
        <div className="footer-top">
          {/* Brand and Social Links */}
          <div className="footer-brand">
            <Link to="/" aria-label="Hydroid Home" className="brand-link">
              <svg
                width="140"
                height="36"
                viewBox="0 0 140 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="brand-logo"
                aria-hidden="true"
                role="img"
              >
                <rect width="140" height="36" rx="6" fill="transparent" />
                <text
                  x="6"
                  y="24"
                  fontFamily="Inter, Arial, sans-serif"
                  fontWeight="700"
                  fontSize="20"
                  fill="#4FC3F7"
                  className="brand-logo-text"
                >
                  Hydroid
                </text>
              </svg>
            </Link>

            <nav className="footer-social" aria-label="Social Links">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5C4.98 4.6 4.12 5.5 3 5.5S1 4.6 1 3.5 1.86 1.5 3 1.5 4.98 2.4 4.98 3.5zM.5 8.5h5v14h-5v-14zM8.5 8.5h4.8v1.9h.1c.7-1.2 2.5-2.6 5.1-2.6 5.5 0 6.5 3.6 6.5 8.2V22.5h-5v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V22.5h-5v-14z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.8-2.3 1C18.7 4 17.8 3.5 16.8 3.5c-1.9 0-3.5 1.6-3.5 3.6 0 .3 0 .7.1 1C9 8 6 6.5 4 4.1c-.4.7-.6 1.4-.6 2.3 0 1.3.7 2.5 1.8 3.2-.6 0-1.1-.2-1.6-.4 0 1.8 1.3 3.3 3 3.6-.5.2-1.1.3-1.7.3-.4 0-.8 0-1.1-.1.8 2.3 3 3.9 5.7 3.9-2.1 1.6-4.8 2.5-7.8 2.5H3c2.5 1.6 5.6 2.5 8.8 2.5 10.6 0 16.4-9.1 16.4-17 0-.2 0-.4 0-.7.9-.6 1.6-1.3 2.2-2.1-.8.4-1.5.6-2.4.8z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zm5.5-3.8a1.1 1.1 0 11-1.1 1.1 1.1 1.1 0 011.1-1.1z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.2c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.3H15c-1.2 0-1.6.8-1.6 1.6V12H17l-.4 3h-2v7A10 10 0 0022 12z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <a
                href="https://www.youtube.com/channel/UCtXiMaOBlteoPPXVMzyrEhA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hydroid YouTube"
                className="social-link"
              >
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path
                    d="M23.5 6.2s-.2-1.6-.8-2.3c-.7-.9-1.5-.9-1.9-1-2.7-.2-6.7-.2-6.7-.2s-4 0-6.7.2c-.4.1-1.2.1-1.9 1-.6.7-.8 2.3-.8 2.3S4 7.9 4 9.5v1c0 1.6.2 3.3.2 3.3s.2 1.6.8 2.3c.7.9 1.6.9 2 1 1.4.1 6.1.2 6.1.2s4 0 6.7-.2c.4-.1 1.2-.1 1.9-1 .6-.7.8-2.3.8-2.3S24 12.2 24 10.8v-1c0-1.6-.5-4.6-.5-4.6zM9.8 14.6v-5.3l4.9 2.6-4.9 2.7z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </nav>
          </div>

          {/* Footer Columns */}
          <div className="footer-columns">
            {/* Know More */}
            <div className="footer-col">
              <h4 className="col-title">Know More</h4>
              <ul className="col-list">
                <li>
                  <Link to="/about" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="footer-link">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/TermsAndConditions" className="footer-link">
                    TermsAndConditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get Help */}
            <div className="footer-col">
              <h4 className="col-title">Get Help</h4>
              <ul className="col-list">
                <li>
                  <Link to="/contact" className="footer-link">
                    Complaints
                  </Link>
                </li>
                <li>
                  <Link to="/resources?tab=faq" className="footer-link">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="footer-col footer-contact">
              <h4 className="col-title">Get in Touch</h4>

              <address className="contact-block">
                <p className="contact-line">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919876543210" className="contact-link">
                    +91-9876543210
                  </a>
                </p>
                <p className="contact-line">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:hydroid.iot@gmail.com" className="contact-link">
                    hydroid@gmail.com
                  </a>
                </p>
                <p className="contact-line address">
                  Hydroid Technologies Pvt. Ltd.<br />
                  3rd Floor, Silver Soft IT Park,<br />
                  SiSoC Group, 23, Rd Number 7, EPIP Zone,<br />
                  Whitefield, Bengaluru, Karnataka 560066
                </p>
              </address>

              {/* App Badges */}
              <div className="app-badges">
                <a
                  href="https://play.google.com/store/apps/details?id=com.hydroid.water"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Hydroid App on Google Play"
                    className="app-badge"
                    width="130"
                  />
                </a>

                {/* <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                    className="app-badge"
                    width="130"
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        {/* -------------------- BOTTOM SECTION -------------------- */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Hydroid — All rights reserved.
          </p>
          <nav className="footer-legal">
            <Link to="/TermsAndConditions" className="legal-link">
              TermsAndConditions
            </Link>
            <Link to="/privacy" className="legal-link">
              Privacy
            </Link>
            <Link to="/sitemap" className="legal-link">
              Sitemap
            </Link>
          </nav>
        </div>
      </motion.div>
    </footer>
  );
}
