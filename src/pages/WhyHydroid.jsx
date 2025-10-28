// src/pages/WhyHydroid.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion"; // ⬅️ for FlowScape animations
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
    if (hash) {
      const cleanUrl = window.location.pathname + window.location.search;
      window.history.replaceState(null, "", cleanUrl);
    }
    const t = setTimeout(() => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      } catch (e) {}
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

  /* ---------------- Impact Metrics state (LAST SECTION) ---------------- */
  const [litres, setLitres] = useState(33668930571);
  const [alerts, setAlerts] = useState(741359);
  const [bars, setBars] = useState(() =>
    Array.from({ length: 24 }, () => 20 + Math.random() * 60)
  );

  useEffect(() => {
    const tick = setInterval(() => {
      setLitres((v) => v + Math.floor(1000 + Math.random() * 7000));
      setAlerts((v) => v + (Math.random() < 0.4 ? 1 : 0));
      setBars((prev) => {
        const next = prev.slice(1);
        const last = prev[prev.length - 1] ?? 40;
        const drift = (Math.random() - 0.3) * 10;
        const val = Math.max(12, Math.min(92, last + drift));
        next.push(val);
        return next;
      });
    }, 800);
    return () => clearInterval(tick);
  }, []);

  const fmt = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  /* ---------------- FlowScape (INLINE) state & helpers ---------------- */
  // Floating bubbles (randomized once)
  const flowscapeBubbles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100, // vw
        size: 8 + Math.random() * 20, // px
        delay: Math.random() * 6, // s
        duration: 8 + Math.random() * 10, // s
        opacity: 0.3 + Math.random() * 0.45,
      })),
    []
  );

  // Parallax tilt
  const flowscapeRef = useRef(null);
  useEffect(() => {
    const el = flowscapeRef.current;
    if (!el) return;
    const handleMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      el.style.setProperty("--tiltX", `${dy * 6}deg`);
      el.style.setProperty("--tiltY", `${dx * -8}deg`);
      el.style.setProperty("--shineX", `${50 + dx * 20}%`);
      el.style.setProperty("--shineY", `${50 + dy * 20}%`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Soft counting for the FlowScape chips (distinct from impact section)
  // 🔁 REPLACED: use "Water Saved This Year" instead of "Meters Online"
  const [fsWaterSaved, setFsWaterSaved] = useState(12_540_000); // litres this year
  const [fsLeaks, setFsLeaks] = useState(1832);
  const [fsLitres, setFsLitres] = useState(33_668_930_571);
  useEffect(() => {
    const t = setInterval(() => {
      setFsWaterSaved((n) => n + 1500 + Math.floor(Math.random() * 3500)); // +1.5–5.0k L
      setFsLeaks((n) => n + (Math.random() > 0.75 ? 1 : 0));
      setFsLitres((n) => n + 2000 + Math.floor(Math.random() * 5000));
    }, 1200);
    return () => clearInterval(t);
  }, []);
  const fsFmt = (n) => n.toLocaleString();
  const fsFmtL = (n) => {
    if (n >= 1e9) return `${(n / 1e9).toFixed(2)} GL`;
    if (n >= 1e6) return `${(n / 1e6).toFixed(2)} ML`;
    if (n >= 1e3) return `${(n / 1e3).toFixed(1)} kL`;
    return `${n.toLocaleString()} L`;
  };

  /* ===================== NEW STATE ONLY FOR THE NEW SECTION ===================== */
  const [todayL, setTodayL] = useState(0);
  const [weekL, setWeekL] = useState(0);
  const [monthL, setMonthL] = useState(0);
  const [leakCount, setLeakCount] = useState(0);
  const [bars2, setBars2] = useState(() =>
    Array.from({ length: 30 }, () => 10 + Math.random() * 70)
  );

  useEffect(() => {
    const t1 = setInterval(() => {
      setTodayL((n) => Math.min(5000, n + Math.floor(Math.random() * 25)));
      setWeekL((n) => Math.min(35000, n + 120 + Math.floor(Math.random() * 140)));
      setMonthL((n) => Math.min(140000, n + 350 + Math.floor(Math.random() * 240)));
      setLeakCount((n) => (Math.random() > 0.93 ? n + 1 : n));
    }, 140);
    const t2 = setInterval(() => {
      setBars2((prev) => {
        const nxt = prev.slice(1);
        nxt.push(10 + Math.random() * 70);
        return nxt;
      });
    }, 280);
    return () => {
      clearInterval(t1);
      clearInterval(t2);
    };
  }, []);

  const nf = (n) => n.toLocaleString();

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

      {/* ------------------------- EMBED: Home sections ------------------------- */}
      <div className="embed-home" aria-hidden="false">
        <Home />
      </div>

      {/* ------------------------- SECTION: Impact Metrics ------------------------- */}
      <section className="impact-wrap" aria-labelledby="impact-title">
        <div className="impact-inner">
          <h2 id="impact-title" className="impact-title">
            Hydroid runs 24×7 — measurable impact, every second.
          </h2>

          <div className="impact-grid">
            {/* Litres measured */}
            <div className="impact-card">
              <div className="impact-sep" />
              <div className="impact-bars" aria-hidden="true">
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className="impact-bar"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="impact-value primary">{fmt(litres)}</div>
              <div className="impact-label">Litres Measured</div>
            </div>

            {/* Reduction */}
            <div className="impact-card">
              <div className="impact-sep" />
              <div className="impact-ring" aria-hidden="true" />
              <div className="impact-value success pulse">35.3%</div>
              <div className="impact-label">
                Reduction in consumption
                <div className="impact-note">
                  *Basis pre-metering consumption data as disclosed by customers.
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="impact-card">
              <div className="impact-sep" />
              <div className="impact-spark" aria-hidden="true">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <div className="impact-value danger">{fmt(alerts)}</div>
              <div className="impact-label">Alerts Generated</div>
            </div>
          </div>

          <a className="impact-cta" href="/contact">Get in touch</a>
        </div>
      </section>

      {/* ------------------------- SECTION: FlowScape (INLINE) ------------------------- */}
      <section className="flowscape">
        {/* animated gradient + waves handled in CSS */}
        <div className="flowscape-inner" ref={flowscapeRef}>
          {/* Floating bubbles */}
          <div className="flowscape-bubbles" aria-hidden>
            {flowscapeBubbles.map((b) => (
              <span
                key={b.id}
                className="bubble"
                style={{
                  left: `${b.left}vw`,
                  width: b.size,
                  height: b.size,
                  animationDelay: `${b.delay}s`,
                  animationDuration: `${b.duration}s`,
                  opacity: b.opacity,
                }}
              />
            ))}
          </div>

          {/* Header */}
          <motion.h2
            className="flowscape-title"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Hydroid FlowScape
          </motion.h2>
          <motion.p
            className="flowscape-sub"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Always-on water intelligence — ripples of real-time insights across your
            network.
          </motion.p>

          {/* Central pulse orb */}
          <div className="flowscape-orb">
            <div className="orb-core" />
            <span className="ring r1" />
            <span className="ring r2" />
            <span className="ring r3" />
            <span className="shine" />
          </div>

          {/* Stat chips */}
          <div className="flowscape-chips">
            <motion.div
              className="chip"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="chip-label">Water Saved This Year</span>
              <span className="chip-value">{fsFmtL(fsWaterSaved)}</span>
            </motion.div>

            <motion.div
              className="chip"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="chip-label">Leaks Prevented</span>
              <span className="chip-value success">{fsFmt(fsLeaks)}</span>
            </motion.div>

            <motion.div
              className="chip"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="chip-label">Litres Managed</span>
              <span className="chip-value">{fsFmt(fsLitres)}</span>
            </motion.div>
          </div>

          {/* Marquee */}
          <div className="flowscape-marquee" aria-hidden>
            <div className="row">
              <span>Real-time telemetry</span>
              <span>Edge analytics</span>
              <span>LoRaWAN ready</span>
              <span>Leak intelligence</span>
              <span>Zero-touch installs</span>
              <span>Resident app</span>
              <span>Fair billing</span>
            </div>
            <div className="row row2">
              <span>Secure by design</span>
              <span>Rugged hardware</span>
              <span>Automatic alerts</span>
              <span>Battery optimized</span>
              <span>Dashboards</span>
              <span>Role-based access</span>
              <span>APIs</span>
            </div>
          </div>

          {/* CTA */}
          <motion.a
            href="/contact"
            className="flowscape-cta"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Book a live walkthrough
          </motion.a>
        </div>

        {/* bottom wave mask */}
        <div className="flowscape-wave" aria-hidden />
      </section>

      {/* ===================  SECTION =================== */}
      <section className="insights2">
        <div className="insights2__inner">
          <h2 className="insights2__title">Weekly Insights — stay ahead of bills</h2>
          <p className="insights2__sub">
            Fresh comparisons, gentle bill forecasts, and leak vigilance so Hydroid users always stay in control.
          </p>

          {/* KPI Cards */}
          <div className="insights2__cards">
            <div className="i2-card">
              <div className="i2-label">Today’s Usage</div>
              <div className="i2-value">{nf(todayL)} L</div>
            </div>
            <div className="i2-card">
              <div className="i2-label">Last 7 Days</div>
              <div className="i2-value">{nf(weekL)} L</div>
            </div>
            <div className="i2-card">
              <div className="i2-label">Current Month</div>
              <div className="i2-value">{nf(monthL)} L</div>
            </div>
            <div className="i2-card">
              <div className="i2-label">No. of Leaks</div>
              <div className="i2-value">{nf(leakCount)}</div>
            </div>
          </div>

          {/* Animated tiny bars like a sparkline banner */}
          <div className="insights2__bars">
            {bars2.map((h, i) => (
              <span key={i} className="i2-bar" style={{ height: `${h}%` }} />
            ))}
          </div>

          {/* Table header look (like your Meter Reading page) */}
          <div className="insights2__table">
            <div className="insights2__table-head">
              <div>
                <h3>Water Usage Data</h3>
                <p className="muted">
                  Organisation : Srinidhi the central park<br />
                  Date : 20-10-2025 to 27-10-2025
                </p>
              </div>
              <button className="btn ghost">PDF</button>
              <button className="btn">Excel</button>
            </div>

            <div className="insights2__table-wrap">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Date and Time</th>
                    <th>Meter For</th>
                    <th>Meter No</th>
                    <th>Reading</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="empty">
                    <td colSpan="6">No Records</td>
                  </tr>
                  <tr className="total">
                    <td colSpan="5" style={{ textAlign: "right" }}>Total</td>
                    <td>0 Litres</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      {/* =================== SECTION ENDS HERE =================== */}
    </>
  );
}
{/* Divider before Footer */}
<div className="flowscape-separator"></div>
