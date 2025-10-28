import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import backgroundVideo from "../assets/264948_tiny.mp4";
import clientsBackground from "../assets/Hydroid.mp4";
import flowVideo from "../assets/hydroid-vedio1.mp4";
import saveWaterVideo from "../assets/save-water-video.mp4";
import deploymentImg from "../assets/vila-and-building.jpg";
import dwarfakamaiLogo from "../assets/dwarakamai-apex-villas-logo.png";
import srinidhiLogo from "../assets/srinidhi-the-central-park-logo.png";
import sarojLogo from "../assets/blue-bell-floor-logo.png";
import featuresBackground from "../assets/watermeter-backround-image.mp4";
import meterInstallVideo from "../assets/meter-install-video.mp4";

import {
  FaFileInvoiceDollar,
  FaTint,
  FaBell,
  FaDatabase,
  FaMicrochip,
  FaBatteryFull,
  FaShieldAlt,
  FaTools,
  FaCloudSun,
  FaIndustry,
} from "react-icons/fa";

export default function Home() {
  const location = useLocation();

  // Hero & Slider content
  const taglines = [
    "Turn your water into wisdom. Hydroid helps reduce bills by up to 35% while making every drop count.",
    "Conserve today, sustain tomorrow. Hydroid empowers you to track and manage water consumption effortlessly.",
    "Transparent billing, smarter living. Hydroid ensures you pay only for what you actually use.",
  ];

  // About text rotation
  const aboutTaglines = [
    "Save Water, Save Life — small steps, big impact.",
    "Smart metering that respects your privacy and budget.",
    "Engineering reliability. Measurable sustainability.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [aboutIndex, setAboutIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((p) => (p + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutIndex((p) => (p + 1) % aboutTaglines.length);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (i) => setCurrentIndex(i);

  // Features
  const features = [
    { icon: <FaFileInvoiceDollar />, title: "Smart Billing", text: "Accurate consumption-based billing for fairness." },
    { icon: <FaTint />, title: "Leak Alerts", text: "Get instant alerts to stop wastage early." },
    { icon: <FaBell />, title: "Real-time Updates", text: "Track water usage anytime from your phone." },
    { icon: <FaDatabase />, title: "Data Insights", text: "Visual dashboards help you understand usage trends." },
    { icon: <FaMicrochip />, title: "LoRa Connectivity", text: "Long-range reliable IoT communication." },
    { icon: <FaBatteryFull />, title: "Long Battery Life", text: "Smart design gives over 10 years of battery backup." },
    { icon: <FaCloudSun />, title: "All-weather Ready", text: "Rugged meters that work in any climate." },
    { icon: <FaShieldAlt />, title: "Secure & Tamper-proof", text: "Strong protection against fraud or manipulation." },
    { icon: <FaTools />, title: "Easy Integration", text: "Fits easily with your existing water meter setup." },
    { icon: <FaIndustry />, title: "Ultrasonic Accuracy", text: "High-precision ultrasonic measurement." },
  ];

  // Clients
  const clients = [
    {
      name: "DWARAKAMAI APEX VILLAS",
      url: "https://dwarakamaihousing.com/apex-villas/location.html",
      img: dwarfakamaiLogo,
    },
    {
      name: "Srinidhi The Central Park",
      url: "https://www.99acres.com",
      img: srinidhiLogo,
    },
    {
      name: "Saroj BlueBells",
      url: "https://sarojgroup.in/bluebells/",
      img: sarojLogo,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Scroll-to helper
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    const id = setTimeout(() => {
      const el =
        document.getElementById(target) ||
        document.querySelector(`[data-scroll-id="${target}"]`) ||
        document.querySelector(`[name="${target}"]`);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top, behavior: "smooth" });
      }
      try {
        window.history.replaceState({}, document.title, location.pathname);
      } catch (e) {}
    }, 80);
    return () => clearTimeout(id);
  }, [location.state?.scrollTo, location.pathname]);

  return (
    <>
      {/* HERO SECTION */}
      <motion.div
        className="hero-wrapper"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="bg-video" aria-hidden>
          <video autoPlay muted loop playsInline preload="auto">
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
        <div className="bg-overlay" aria-hidden />
        <section id="home" className="hero">
          <div className="container hero-inner">
            <motion.div
              className="slider-container"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div
                className="slider"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {taglines.map((t, idx) => (
                  <h1 key={idx} className="hero-title slide-text">
                    {t}
                  </h1>
                ))}
              </div>
            </motion.div>

            <div className="slider-dots">
              {taglines.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
                />
              ))}
            </div>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.a
                className="btn btn-primary"
                href="/about"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                More about us
              </motion.a>
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* FEATURES */}
      <section id="features" className="section features" data-scroll-id="features">
        <div className="bg-video" aria-hidden>
          <video autoPlay muted loop playsInline preload="auto">
            <source src={featuresBackground} type="video/mp4" />
          </video>
        </div>
        <div className="features-overlay" />
        <div className="container">
          <h2 className="">Why Hydroid?</h2>
          <div className="features-grid">
            {features.map((f, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.03 }}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="section clients">
        <div className="bg-video" aria-hidden>
          <video autoPlay muted loop playsInline preload="auto">
            <source src={clientsBackground} type="video/mp4" />
          </video>
        </div>
        <div className="clients-overlay" />
        <div className="container">
          <h2 className="section-title">Our Trusted Clients</h2>
          <p className="section-subtitle">
            We are proud to be trusted by leading communities & developers
          </p>
          <div className="clients-grid">
            {clients.map((c, idx) => (
              <motion.a
                key={idx}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="client-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={idx}
                whileHover={{ scale: 1.03 }}
              >
                <img src={c.img} alt={c.name} className="client-logo" />
                <h3>{c.name}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section id="deployment" className="section deployment-section">
        <div className="container">
          <h2 className="section-title">Meters Deployment – High Rise & Villa</h2>
          <div className="deployment-content">
            <motion.div
              className="deployment-left"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={deploymentImg}
                alt="High Rise and Villa Deployment"
                className="deployment-img"
              />
            </motion.div>

            <motion.div
              className="deployment-right"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="video-wrapper">
                <video
                  className="meter-install-video"
                  src={meterInstallVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
                <div className="video-label top">
                  Meter Installation — Demo
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FIELD INSIGHTS */}
      <section id="field-insights" className="section field-insights">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="insights-title">
              Field Insights • Real Installs, Real Data
            </h2>
            <p className="insights-sub">
              Live snapshots from the field — actionable metrics, installation
              speed, and environmental resilience. These are quick wins we
              deliver on every project.
            </p>
          </motion.div>

          <div className="insights-grid">
            <div className="insights-left">
              <motion.div
                className="insight-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
                whileHover={{ scale: 1.03, translateY: -6 }}
              >
                <div className="insight-kicker">Uptime</div>
                <h3>99.8% Network Availability</h3>
                <p>
                  Robust LoRa links and automated retries keep meters reporting
                  reliably even in dense urban canyons.
                </p>
              </motion.div>

              <motion.div
                className="insight-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                whileHover={{ scale: 1.03, translateY: -6 }}
              >
                <div className="insight-kicker">Speed</div>
                <h3>Install in under 12 minutes</h3>
                <p>
                  Modular mounts and plug-and-play readings mean faster
                  deployment and less operational downtime.
                </p>
              </motion.div>

              <motion.div
                className="insight-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={2}
                whileHover={{ scale: 1.03, translateY: -6 }}
              >
                <div className="insight-kicker">Reliability</div>
                <h3>Consistent & Predictable Readings</h3>
                <p>
                  High-resolution flow sensors with automated diagnostics ensure
                  precise readings and reduce false alarms.
                </p>
              </motion.div>

              <motion.div
                className="insight-cta"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
              >
                <a href="/contact" className="btn btn-ghost">
                  Request a Pilot
                </a>
                <a href="/case-studies" className="link-muted">
                  See case studies →
                </a>
              </motion.div>
            </div>

            <div className="insights-right">
              <motion.div
                className="insights-video-tile"
                initial={{ scale: 0.98, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="tile-gradient" />
                <video
                  className="insights-video"
                  src={meterInstallVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
                <div className="tile-badge">Live Install • Onsite Demo</div>
                <div className="tile-stats">
                  <div className="stat">
                    <strong>12</strong>
                    <span>mins avg</span>
                  </div>
                  <div className="stat">
                    <strong>99.8%</strong>
                    <span>uptime</span>
                  </div>
                  <div className="stat">
                    <strong>±0.5%</strong>
                    <span>accuracy</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US FIXED VIDEO SECTION */}
      <section id="about-us" className="section about-us-section">
        <div className="about-video-container">
          <video
            className="about-video"
            src={saveWaterVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="about-overlay" />
          <div className="about-content">
            <motion.h2
              className="about-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Every Drop Counts
            </motion.h2>
            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              We are redefining water efficiency with smart monitoring, reliable
              analytics, and connected infrastructure that sustains our planet.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}
