import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import backgroundVideo from "../assets/264948_tiny.mp4";
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
import { Link } from "react-scroll"; // ✅ Import react-scroll

export default function Home() {
  const taglines = [
    "Your water tells a story—make it a smart one. With Hydroid, you can save up to 35% on bills while protecting our planet. Take control today for a greener tomorrow.",
    "Every drop matters—and knowing how much you use is the first step to saving it. Hydroid helps you monitor and conserve water, because the future flows in your hands.",
    "Fairness starts at home. With Hydroid, pay only for what you truly use—no more flat rates, just smart, transparent water billing. Because every drop should count, and so should every rupee."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // ✅ Features Data
  const features = [
    { icon: <FaFileInvoiceDollar />, title: "Smart Billing", text: "Pay only for what you use with precise consumption tracking." },
    { icon: <FaTint />, title: "Leakage Detection", text: "Instant alerts for leaks to prevent water loss & damage." },
    { icon: <FaBell />, title: "Alerts & Notifications", text: "Get real-time usage and system alerts on your phone." },
    { icon: <FaDatabase />, title: "Data Analytics", text: "Visualize and analyze water usage with powerful insights." },
    { icon: <FaMicrochip />, title: "LoRa Technology", text: "Reliable long-range communication for smart monitoring." },
    { icon: <FaBatteryFull />, title: "10+ Year Battery", text: "Low-power design ensures over a decade of battery life." },
    { icon: <FaCloudSun />, title: "Weatherproof", text: "Durable meters built for all weather conditions." },
    { icon: <FaShieldAlt />, title: "Tamper-Proof", text: "Secure design to prevent manipulation & fraud." },
    { icon: <FaTools />, title: "Retro-Fit Compatible", text: "Easily integrates with existing meter infrastructure." },
    { icon: <FaIndustry />, title: "Ultrasonic Precision", text: "Highly accurate ultrasonic measurement technology." },
  ];

  return (
    <>
      {/* ✅ Hero Section */}
      <motion.div
        className="hero-wrapper"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="bg-video" aria-hidden>
          <video autoPlay muted loop playsInline preload="auto">
            <source src={backgroundVideo} type="video/mp4" />
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
              <div
                className="slider"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
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
                ></span>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {/* ✅ Smooth scroll to Features */}
              <Link
                to="features"
                smooth={true}
                duration={1200}   // 1.2s for smoother feel
                offset={-70}     // adjust if sticky header
                className="btn btn-outline"
              >
                Explore Hydroid
              </Link>

              {/* About Us Page link */}
              <motion.a
                className="btn btn-primary"
                href="/about"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                More about us
              </motion.a>
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* ✅ Features Section */}
      <section id="features" className="section features">
        <div className="container">
          <h2 className="section-title">Smart Water Meter Features</h2>
          <div className="features-grid">
            {features.map((f, index) => (
              <motion.div
                key={index}
                className="feature-card"
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

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Hydroid is committed to delivering innovative IoT solutions for
            utilities and enterprises. Our technology ensures accurate data,
            operational efficiency, and cost savings.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Get in touch for a demo or more information.</p>
          <a className="btn btn-primary" href="/contact">
            Contact Now
          </a>
        </div>
      </section>
    </>
  );
}
