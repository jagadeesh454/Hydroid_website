// WhyHydroid.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";

/* Background video */
import waterbgvedio from "../assets/waterbgvedio.mp4";

/* Web images */
import webapp1 from "../assets/webapp1.png";
import webapp2 from "../assets/webapp2.png";
import webapp3 from "../assets/webapp3.png";
import webapp4 from "../assets/webapp4.png";
import webapp5 from "../assets/webapp5.png";
import webapp6 from "../assets/webapp6.png";

/* Mobile images */
import userlogin from "../assets/userlogin-M.png";
import meterReading from "../assets/MeterReading-M.png";
import tickets from "../assets/Tickets-app-M.png";
import payment from "../assets/app-payment-M.png";
import notification from "../assets/Notification-M.png";
import leak from "../assets/Leak-M.png";

/* New asset for second section */
import waterMeter from "../assets/watermeter.png";

/* ---------- Scroll to Top helper ---------- */
function ScrollToTopOnMount() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Remove hash from URL (prevents auto-scroll to anchors)
    if (hash) {
      const cleanUrl = window.location.pathname + window.location.search;
      window.history.replaceState(null, "", cleanUrl);
    }

    // Slight delay to override router restore behavior, then scroll to top
    const t = setTimeout(() => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } catch (e) {
        // ignore
      }
    }, 150);

    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
}

/* arrays (order you specified) */
const WEB = [
  { src: webapp1, alt: "Dashboard (Web)", title: "Dashboard (Web)" },
  { src: webapp2, alt: "Usage & Meter Reading (Web)", title: "Usage & Meter Reading (Web)" },
  { src: webapp3, alt: "Tickets (Web)", title: "Tickets (Web)" },
  { src: webapp4, alt: "Payments (Web)", title: "Payments (Web)" },
  { src: webapp5, alt: "Notifications (Web)", title: "Notifications (Web)" },
  { src: webapp6, alt: "Leaks (Web)", title: "Leak Monitoring (Web)" },
];

const MOBILE = [
  { src: userlogin, alt: "Dashboard (Mobile)", title: "Dashboard (Mobile)" },
  { src: meterReading, alt: "Meter Reading (Mobile)", title: "Meter Reading (Mobile)" },
  { src: tickets, alt: "Tickets (Mobile)", title: "Tickets (Mobile)" },
  { src: payment, alt: "Payments (Mobile)", title: "Payments (Mobile)" },
  { src: notification, alt: "Notifications (Mobile)", title: "Notifications (Mobile)" },
  { src: leak, alt: "Leaks (Mobile)", title: "Leak Detection (Mobile)" },
];

export default function WhyHydroid() {
  const [wIndex, setWIndex] = useState(0);
  const [mIndex, setMIndex] = useState(0);
  const intervalRef = useRef(null);
  const DURATION = 1000;

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startAuto = () => {
    stopAuto();
    intervalRef.current = setInterval(() => {
      setWIndex((i) => (i + 1) % WEB.length);
      setMIndex((i) => (i + 1) % MOBILE.length);
    }, DURATION);
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handlePointerEnter = () => stopAuto();
  const handlePointerLeave = () => startAuto();

  const posClass = (i, idx, len) => {
    const prev = (idx - 1 + len) % len;
    const next = (idx + 1) % len;
    if (i === idx) return "center";
    if (i === prev) return "left-out";
    if (i === next) return "right-out";
    return "far";
  };

  /* Second section animation trigger */
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <ScrollToTopOnMount />

      {/* ------------------------- FIRST SECTION (UNCHANGED) ------------------------- */}
      <section
        className="ph-section"
        aria-label="Parallel hero showcase"
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <video className="ph-bgvideo" autoPlay muted loop playsInline>
          <source src={waterbgvedio} type="video/mp4" />
        </video>
        <div className="ph-overlay" />

        <div className="ph-inner">
          <div className="intro-text">
            <h1>Experience Control Anywhere</h1>
            <p>
              Hydroid provides <strong>both web and mobile applications</strong> to
              monitor your gas or water usage in real time, track analytics, raise
              tickets, make payments, and control your system — all in one unified
              smart platform.
            </p>
          </div>

          <h2 className="ph-title">Measure • Monitor • Control</h2>

          <div className="ph-lanes">
            <div className="ph-lane ph-lane-left">
              <div className="ph-lane-label">Web</div>
              <div className="ph-track">
                {WEB.map((item, i) => {
                  const cls = posClass(i, wIndex, WEB.length);
                  return (
                    <figure key={i} className={`ph-card web ${cls}`}>
                      <img src={item.src} alt={item.alt} draggable="false" />
                      <figcaption className="ph-caption">{item.title}</figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>

            <div className="ph-lane ph-lane-right">
              <div className="ph-lane-label">Mobile</div>
              <div className="ph-track">
                {MOBILE.map((item, i) => {
                  const cls = posClass(i, mIndex, MOBILE.length);
                  return (
                    <figure key={i} className={`ph-card mobile ${cls}`}>
                      <img src={item.src} alt={item.alt} draggable="false" />
                      <figcaption className="ph-caption">{item.title}</figcaption>
                    </figure>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="ph-bottom">
            <div className="ph-bottom-item">
              <strong>Web:</strong> {WEB[wIndex].title}
            </div>
            <div className="ph-bottom-item">
              <strong>Mobile:</strong> {MOBILE[mIndex].title}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- SECOND SECTION (SLIDING CARDS) ------------------------- */}
      <section className="why2-section">
        <div className={`why2-inner ${animate ? "show" : ""}`}>
          <h3 className="why2-heading">Wireless Solution for Villas & Standalone Homes</h3>
          <p className="why2-lead">
            Our ultrasonic meter provides real-time precision readings and reliability for
            villas and independent homes. Built for durability, minimal maintenance, and
            seamless integration with smart systems.
          </p>

          <div className="why2-grid">
            <ul className="why2-list left">
              <li className="why2-item slide-left">✔ Certified performance</li>
              <li className="why2-item slide-left">🔧 Quick, clean installation</li>
              <li className="why2-item slide-left">🔩 Robust & flexible design</li>
              <li className="why2-item slide-right">🏠 Smart home connectivity</li>
            </ul>

            <div className="why2-center">
              <div className="why2-orbit">
                <img src={waterMeter} alt="Water Meter" className="why2-image" />
              </div>
            </div>

            <ul className="why2-list right">
              <li className="why2-item slide-right">📄 Metering certified</li>
              <li className="why2-item slide-right">📶 Ultrasonic sensing</li>
              <li className="why2-item slide-left">⚙ No mechanical wear</li>
              <li className="why2-item slide-right">💬 Communication ready</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------------------------- EMBED: Home sections (features, clients, how-it-works, deployment) ------------------------- */}
      <div className="embed-home" aria-hidden="false">
        <Home />
      </div>
    </>
  );
}
