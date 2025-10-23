import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import backgroundVideo from "../assets/264948_tiny.mp4";
import clientsBackground from "../assets/Hydroid.mp4";
import flowVideo from "../assets/hydroid-vedio1.mp4";
import saveWaterVideo from "../assets/save-water-video.mp4";
import deploymentImg from "../assets/vila-and-building.jpg";
import dwarakamaiLogo from "../assets/dwarakamai-apex-villas-logo.png";
import srinidhiLogo from "../assets/srinidhi-the-central-park-logo.png";
import sarojLogo from "../assets/blue-bell-floor-logo.png";
import featuresBackground from "../assets/watermeter-backround-image.mp4";

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

  const taglines = [
    "Turn your water into wisdom. Hydroid helps reduce bills by up to 35% while making every drop count.",
    "Conserve today, sustain tomorrow. Hydroid empowers you to track and manage water consumption effortlessly.",
    "Transparent billing, smarter living. Hydroid ensures you pay only for what you actually use.",
  ];

  const aboutTaglines = [
    "Save Water, Save Life – Every Drop Counts.",
    "Conserve today, sustain tomorrow.",
    "Together, let’s protect our planet’s most precious resource.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [aboutIndex, setAboutIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAboutIndex((prevIndex) => (prevIndex + 1) % aboutTaglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [aboutTaglines.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToAboutSlide = (index) => {
    setAboutIndex(index);
  };

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

  const clients = [
    {
      name: "DWARAKAMAI APEX VILLAS",
      url: "https://dwarakamaihousing.com/apex-villas/location.html",
      img: dwarakamaiLogo,
    },
    {
      name: "Srinidhi The Central Park",
      url: "https://www.99acres.com/srinidhi-the-central-park-vibhutipura-bangalore-east-npxid-r348979",
      img: srinidhiLogo,
    },
    {
      name: "Saroj BlueBells",
      url: "https://sarojgroup.in/bluebells/",
      img: sarojLogo,
    },
  ];

  // Animation for word-by-word
  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08 },
    }),
  };

  // If navigated here with state.scrollTo, scroll to that element after mount.
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
      // Clear state so refresh doesn't auto-scroll again
      try {
        window.history.replaceState({}, document.title, location.pathname);
      } catch (e) {
        // ignore
      }
    }, 80);

    return () => clearTimeout(id);
  }, [location.state?.scrollTo, location.pathname]);

  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="hero-wrapper"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="bg-video" aria-hidden>
          <video autoPlay muted loop playsInline preload="auto">
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-overlay" aria-hidden></div>

        <section id="home" className="hero">
          <div className="container hero-inner">
            {/* Slider */}
            <motion.div
              className="slider-container"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {taglines.map((text, index) => (
                  <h1 key={index} className="hero-title slide-text">
                    {text}
                  </h1>
                ))}
              </div>
            </motion.div>

            {/* Dots */}
            <div className="slider-dots">
              {taglines.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.a className="btn btn-primary" href="/about" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                More about us
              </motion.a>
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* Features Section */}
      <section id="features" className="section features" data-scroll-id="features">
        {/* Background Video */}
        <div className="bg-video" aria-hidden>
          <video autoPlay muted loop playsInline preload="auto">
            <source src={featuresBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="features-overlay"></div>

        {/* Content */}
        <div className="container">
          <h2 className="section-title">Why Hydroid?</h2>
          <div className="features-grid">
            {features.map((f, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="section clients">
        <div className="bg-video" aria-hidden>
          <video autoPlay muted loop playsInline preload="auto">
            <source src={clientsBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="clients-overlay" />
        <div className="container">
          <h2 className="section-title">Our Trusted Clients</h2>
          <p className="section-subtitle">We are proud to be trusted by leading communities & developers</p>
          <div className="clients-grid">
            {clients.map((c, i) => (
              <motion.a
                key={i}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="client-card"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.18 }}
                whileHover={{ scale: 1.05 }}
              >
                <img src={c.img} alt={c.name} className="client-logo" />
                <h3>{c.name}</h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section how-it-works bg-image-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>

          {/* First line animated */}
          <div className="section-subtitle">
            {"Our IoT-enabled water management follows a streamlined flow:"
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ display: "inline-block", marginRight: "6px" }}
                >
                  {word}
                </motion.span>
              ))}
            <br />
            <strong>
              {"IoT Device → LoRa Gateway → TTI/TTN → Backend/Server → Database → UI"
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={wordAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ display: "inline-block", marginRight: "6px" }}
                  >
                    {word}
                  </motion.span>
                ))}
            </strong>
          </div>

          <motion.div
            className="flow-diagram"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flow-video-container">
              <video autoPlay loop muted playsInline className="flow-video">
                <source src={flowVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          <motion.div
            className="deployment"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Meters Deployment – High Rise & Villa</h3>
            <img src={deploymentImg} alt="High Rise and Villa Deployment" className="deployment-img" />
          </motion.div>
        </div>
      </section>

      {/* About Us Intro Section */}
      <section className="section about-intro">
        <div className="container">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">
            {"At Hydroid, we deliver smart IoT-driven solutions for apartments, villas, and enterprises. Our technology ensures accuracy, efficiency, and sustainability in water management— helping communities save money and conserve resources."
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ display: "inline-block", marginRight: "6px" }}
                >
                  {word}
                </motion.span>
              ))}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-video-container">
          <video src={saveWaterVideo} autoPlay loop muted playsInline className="about-video"></video>
        </div>
        <div className="about-overlay">
          <motion.h2
            className="about-heading"
            key={aboutIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {aboutTaglines[aboutIndex]}
          </motion.h2>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Want a live demo or more details? Reach out to us today.</p>
          <a className="btn btn-primary" href="/contact">
            Contact Now
          </a>
        </div>
      </section>
    </>
  );
}
