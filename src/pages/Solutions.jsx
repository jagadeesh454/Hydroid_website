import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import appVideo from "../assets/app-vedio.mp4";
import waterbg from "../assets/waterbg.jpg"; // background image

// === Animation variants ===
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 1) => ({ opacity: 1, x: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};
const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 1) => ({ opacity: 1, x: 0, transition: { delay: i * 0.12, duration: 0.6 } }),
};
const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i = 1) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.12, duration: 0.5 } }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

// === Card Data ===
const features = [
  { icon: "💧", title: "Smart Metering", desc: "IoT-enabled precise water measurement for every apartment." },
  { icon: "⚖️", title: "Fair Billing", desc: "Residents pay only for the exact amount of water consumed." },
  { icon: "📊", title: "Real-Time Monitoring", desc: "Track live water usage with interactive dashboards." },
  { icon: "🚨", title: "Leak Detection & Alerts", desc: "Instant notifications help prevent water wastage." },
  { icon: "📑", title: "Analytics & Reporting", desc: "Smart insights for residents, managers, and communities." },
  { icon: "🌍", title: "Sustainability Impact", desc: "Enabling long-term conservation and reduced demand." },
];

// === New Scrolling Highlights ===
const HIGHLIGHTS = [
  {
    id: "sc1",
    emoji: "☁️",
    title: "Cloud-enabled Data Hub",
    body:
      "Meter readings flow securely to the cloud so managers and residents can view consumption instantly and act with certainty.",
  },
  {
    id: "sc2",
    emoji: "🧭",
    title: "Precision Consumption Tracking",
    body:
      "Ultrasonic sensing delivers precise per-unit readings — minimizing disputes and enabling targeted conservation guidance.",
  },
  {
    id: "sc3",
    emoji: "🛡️",
    title: "Robust, Tamper-aware Hardware",
    body:
      "Rugged meter design, tamper alerts and long-life batteries reduce service calls and preserve data integrity over years.",
  },
  {
    id: "sc4",
    emoji: "⚡",
    title: "Instant Alerts & Faster Fixes",
    body:
      "Automatic leak detection and anomaly alerts shorten time-to-repair and stop waste before it becomes costly damage.",
  },
];

export default function Solutions() {
  // Animated counter targets
  const TARGETS = { consumptionDrop: 65, leakResolved: 82, billReduction: 48 };

  // Animated counter states
  const [consumptionDrop, setConsumptionDrop] = useState(0);
  const [leakResolved, setLeakResolved] = useState(0);
  const [billReduction, setBillReduction] = useState(0);

  // Stroke progress states (0-100)
  const [strokeA, setStrokeA] = useState(0);
  const [strokeB, setStrokeB] = useState(0);
  const [strokeC, setStrokeC] = useState(0);

  const portalRef = useRef(null);
  const startedRef = useRef(false);

  // Intersection observer to start animations when portal visible
  useEffect(() => {
    const el = portalRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            runCount(consumptionDrop, TARGETS.consumptionDrop, setConsumptionDrop, setStrokeA, 900);
            setTimeout(() => runCount(leakResolved, TARGETS.leakResolved, setLeakResolved, setStrokeB, 1100), 120);
            setTimeout(() => runCount(billReduction, TARGETS.billReduction, setBillReduction, setStrokeC, 1100), 240);
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // runCount animates a numeric counter and updates stroke percentage
  function runCount(current, target, setNumber, setStroke, duration = 900) {
    const start = performance.now();
    const from = 0;
    const to = target;
    const step = (time) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(from + (to - from) * eased);
      setNumber(value);
      setStroke(Math.round(value)); // stroke uses same percent (0-100)
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /***** NEW: Auto Scrolling highlights carousel *****/
  const [hlIndex, setHlIndex] = useState(0);
  const hlTimer = useRef(null);
  const hlPaused = useRef(false);
  const HL_DELAY = 3500; // milliseconds

  useEffect(() => {
    // start interval once
    hlTimer.current = setInterval(() => {
      if (!hlPaused.current) {
        setHlIndex((prev) => (prev + 1) % HIGHLIGHTS.length);
      }
    }, HL_DELAY);
    return () => {
      if (hlTimer.current) clearInterval(hlTimer.current);
    };
  }, []);
  /***** end auto scrolling highlights *****/

  // helper pause handlers for hover
  function onHlMouseEnter() {
    hlPaused.current = true;
  }
  function onHlMouseLeave() {
    hlPaused.current = false;
  }

  return (
    <div className="solutionus">
      {/* === What We Do === */}
      <section id="what-we-do" className="section image-section">
        {/* ✅ Background Video */}
        <video className="background-video" src={appVideo} autoPlay loop muted playsInline />

        {/* Content Overlay */}
        <div className="image-overlay">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={zoomIn}
            className="section-title"
          >
            What We Do
          </motion.h2>

          <motion.div
            className="cards"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((item, i) => (
              <motion.div
                key={i}
                className="card"
                variants={zoomIn}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === Combined Section with Background Image === */}
      <section
        id="combined-sections"
        className="section water-background"
        style={{ backgroundImage: `url(${waterbg})` }}
      >
        {/* How It Works */}
        <div className="overlay-content">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={zoomIn}
            className="section-title"
          >
            How It Works
          </motion.h2>
          <motion.ol
            className="list"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Each apartment has a Hydroid water meter installed.",
              "Meters send encrypted data securely to the Hydroid cloud.",
              "Residents and managers track real-time consumption.",
              "Automated billing ensures fairness.",
              "Leaks or abnormal usage trigger instant alerts.",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fadeInRight}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ol>
        </div>

        {/* Our Impact */}
        <div className="overlay-content">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={zoomIn}
            className="section-title"
          >
            Our Impact
          </motion.h2>
          <motion.ul
            className="list"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "💧 35% average reduction in consumption when households track usage.",
              "⚖️ Fair cost-sharing eliminates disputes in apartments.",
              "🚨 Leak detection saves thousands of liters of water per year.",
              "📊 Data-driven governance for communities and cities.",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fadeInLeft}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ------------------ Impact Portal ------------------ */}
      <section id="impact-portal" className="section impact-portal" ref={portalRef}>
        <div className="impact-inner">
          <motion.h2 className="impact-title" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
            Impact Portal — Real results, real savings
          </motion.h2>

          <motion.p className="impact-lead" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            See the measurable changes after deploying smart metering — from reduced consumption to quicker leak resolution and fairer billing across communities.
          </motion.p>

          <div className="impact-grid">
            <div className="impact-counters">
              <div className="counter-card">
                <motion.div
                  className="radial"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <svg viewBox="0 0 36 36" className="circular-chart blue">
                    <path
                      className="circle-bg"
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray="65, 100"
                      d="M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" className="percentage">65%</text>
                  </svg>
                </motion.div>
                <div className="counter-meta">
                  <div className="counter-value">65%</div>
                  <div className="counter-label">Avg Consumption Drop</div>
                </div>
              </div>

              <div className="counter-card">
                <motion.div
                  className="radial"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.08 }}
                >
                  <svg viewBox="0 0 36 36" className="circular-chart teal">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831"/>
                    <path className="circle" strokeDasharray="82, 100" d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831"/>
                    <text x="18" y="20.35" className="percentage">82%</text>
                  </svg>
                </motion.div>
                <div className="counter-meta">
                  <div className="counter-value">82%</div>
                  <div className="counter-label">Leak Alerts Resolved</div>
                </div>
              </div>

              <div className="counter-card">
                <motion.div
                  className="radial"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.16 }}
                >
                  <svg viewBox="0 0 36 36" className="circular-chart mint">
                    <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831"/>
                    <path className="circle" strokeDasharray="48, 100" d="M18 2.0845 a 15.9155 15.9155 0 1 1 0 31.831 a 15.9155 15.9155 0 1 1 0 -31.831"/>
                    <text x="18" y="20.35" className="percentage">48%</text>
                  </svg>
                </motion.div>
                <div className="counter-meta">
                  <div className="counter-value">48%</div>
                  <div className="counter-label">Avg Bill Reduction</div>
                </div>
              </div>
            </div>

            <div className="impact-progress">
              <motion.div
                className="prog"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <div className="prog-row">
                  <div className="prog-label">Meter Uptime</div>
                  <div className="prog-bar">
                    <div className="prog-fill" style={{ width: "99%" }} />
                  </div>
                  <div className="prog-val">99%</div>
                </div>

                <div className="prog-row">
                  <div className="prog-label">Data Delivery SLA</div>
                  <div className="prog-bar">
                    <div className="prog-fill" style={{ width: "94%" }} />
                  </div>
                  <div className="prog-val">94%</div>
                </div>

                <div className="prog-row">
                  <div className="prog-label">Avg Issue TTR</div>
                  <div className="prog-bar">
                    <div className="prog-fill alt" style={{ width: "72%" }} />
                  </div>
                  <div className="prog-val">72%</div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Horizontal scroller: case studies */}
          <motion.div
            className="impact-cases"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="cases-title">Selected Case Studies</h3>

            <div className="cases-track" role="list">
              <article className="case-card" role="listitem">
                <div className="case-flag">Apartment Complex • Bengaluru</div>
                <h4>50% fewer billing disputes</h4>
                <p>Transparent metering and automated billing resolved recurring billing conflicts in shared buildings.</p>
              </article>

              <article className="case-card">
                <div className="case-flag">Villa Community • Kochi</div>
                <h4>30% water saved in 6 months</h4>
                <p>Residents reduced non-essential consumption after monthly feedback reports and alerts.</p>
              </article>

              <article className="case-card">
                <div className="case-flag">Developer Project • Hyderabad</div>
                <h4>Easy bulk-deployment</h4>
                <p>Pre-provisioned meters and cloud onboarding cut commissioning time by 40% for the developer.</p>
              </article>
            </div>

            <div className="impact-cta-row">
              <a href="/contact" className="btn btn-primary">Get a deployment plan</a>
              <a href="/whitepaper" className="btn btn-ghost">Download the impact brief</a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ------------------ End Impact Portal ------------------ */}

      {/* ------------------ Conservation Highlights ------------------ */}
      <section className="conservation-highlights" aria-label="Conservation highlights">
        <div className="ch-inner">
          <motion.h2
            className="ch-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Together for a Water-Smart Future
          </motion.h2>
          <p className="ch-sub">
            Building communities that monitor, share, and conserve water collectively — because every drop counts when everyone contributes.
          </p>

          <motion.div
            className="ch-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {/* Card 1 (new text — same meaning) */}
            <motion.article
              className="ch-card ch-card-1"
              variants={{ hidden: { opacity: 0, y: 28, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } } }}
              whileHover={{ y: -8, boxShadow: "0 18px 40px rgba(12, 34, 85, 0.12)" }}
            >
              <motion.div className="ch-icon-wrap" whileHover={{ y: -6 }} aria-hidden>
                <svg viewBox="0 0 24 24" className="ch-icon" aria-hidden>
                  <path d="M3 13c0-1.7 1-3 2.5-3.5C8 8 11 6 12 3c1 3 4 5 6.5 6.5C20 10 21 11.3 21 13c0 3-3 5-9 8-6-3-9-5-9-8z" />
                </svg>
              </motion.div>
              <h3 className="ch-title">Data-driven Meter Insights</h3>
              <p className="ch-body">
                Providing accurate water readings and intuitive dashboards that help every building manage water flow efficiently and make informed decisions based on real usage.
              </p>
              <div className="ch-cta-row">
                <button className="ch-cta">Learn More</button>
                <span className="ch-tag">Measurement</span>
              </div>
            </motion.article>

            {/* Card 2 (new text — same meaning) */}
            <motion.article
              className="ch-card ch-card-2"
              variants={{ hidden: { opacity: 0, y: 28, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: 0.06 } } }}
              whileHover={{ y: -8, boxShadow: "0 18px 40px rgba(12, 34, 85, 0.12)" }}
            >
              <motion.div className="ch-icon-wrap" whileHover={{ y: -6 }} aria-hidden>
                <svg viewBox="0 0 24 24" className="ch-icon" aria-hidden>
                  <path d="M12 2l3 6 6 .5-4.5 3 1.5 6L12 15l-6 3 1.5-6L3 8.5 9 8 12 2z" />
                </svg>
              </motion.div>
              <h3 className="ch-title">Encouraging Mindful Use</h3>
              <p className="ch-body">
                Smart water reminders and gentle alerts help residents build daily habits that reduce water waste and promote responsible consumption throughout their homes.
              </p>
              <div className="ch-cta-row">
                <button className="ch-cta">Learn More</button>
                <span className="ch-tag">Behaviour</span>
              </div>
            </motion.article>

            {/* Card 3 (new text — same meaning) */}
            <motion.article
              className="ch-card ch-card-3"
              variants={{ hidden: { opacity: 0, y: 28, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: 0.12 } } }}
              whileHover={{ y: -8, boxShadow: "0 18px 40px rgba(12, 34, 85, 0.12)" }}
            >
              <motion.div className="ch-icon-wrap" whileHover={{ y: -6 }} aria-hidden>
                <svg viewBox="0 0 24 24" className="ch-icon" aria-hidden>
                  <path d="M12 3C8 7 4 8 4 12c0 2.8 2.7 5 6 5s6-2.2 6-5c0-4-4-5-4-9z" />
                </svg>
              </motion.div>
              <h3 className="ch-title">Community Conservation Programs</h3>
              <p className="ch-body">
                Shared water insights and collective goals encourage communities to work together, conserve resources, and achieve long-term sustainability with measurable results.
              </p>
              <div className="ch-cta-row">
                <button className="ch-cta">Learn More</button>
                <span className="ch-tag">Community</span>
              </div>
            </motion.article>
          </motion.div>

          {/* Skyline decorative footer */}
          <div className="ch-skyline" aria-hidden>
            <svg viewBox="0 0 1000 60" preserveAspectRatio="none" className="ch-skyline-svg">
              <g fill="none" stroke="#213b6b" strokeWidth="1.4" strokeLinecap="round">
                <path d="M10 50 L40 20 L70 50 L100 30 L140 50 L180 20 L220 50 L260 50 L300 20 L340 50 L380 30 L420 50 L460 40 L500 50 L540 20 L580 50 L620 30 L660 50 L700 20 L740 50 L780 30 L820 50 L860 40 L900 50 L940 30 L980 50" />
              </g>
            </svg>
            <ul className="ch-cities">
              <li>Bangalore</li>
              <li>Hyderabad</li>
              <li>Chennai</li>
              <li>Kochi</li>
              <li>Pune</li>
              <li>Mumbai</li>
            </ul>
          </div>
        </div>
      </section>
      {/* ------------------ END INLINED Conservation Highlights ------------------ */}

      {/* ------------------ NEW SECTION: Auto-scrolling Highlights — one-by-one cards ------------------ */}
      <section className="section highlights-rolling" aria-label="Highlights carousel">
        <div className="highlights-inner">
          <motion.h3
            className="highlights-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={zoomIn}
          >
            Highlights — What changes after deployment
          </motion.h3>
          <p className="highlights-sub">
            Short, focused outcomes — automatically showcasing each highlight one by one.
          </p>

          <div
            className="highlights-carousel auto"
            onMouseEnter={onHlMouseEnter}
            onMouseLeave={onHlMouseLeave}
            aria-live="polite"
          >
            <div className="hl-track">
              {HIGHLIGHTS.map((h, i) => {
                const active = i === hlIndex;
                return (
                  <motion.article
                    key={h.id}
                    className={`hl-card ${active ? "active" : ""}`}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <div className="hl-emoji">{h.emoji}</div>
                    <h4 className="hl-title">{h.title}</h4>
                    <p className="hl-body">{h.body}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* ------------------ END Auto-scrolling Highlights ------------------ */}

    </div>
  );
}
