import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import appVideo from "../assets/app-vedio.mp4";
import waterbg from "../assets/waterbg.jpg"; // background image

// === Animation variants (reuse) ===
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

// === New Scrolling Highlights (different wording) ===
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

      {/* ------------------ Impact Portal (existing counters & cases) ------------------ */}
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
