import React from "react";
import { motion } from "framer-motion";
import appVideo from "../assets/app-vedio.mp4";
import waterbg from "../assets/waterbg.jpg"; // ✅ Background image

// === Animation Variants ===
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

// === Card Data ===
const features = [
  {
    icon: "💧",
    title: "Smart Metering",
    desc: "IoT-enabled precise water measurement for every apartment.",
  },
  {
    icon: "⚖️",
    title: "Fair Billing",
    desc: "Residents pay only for the exact amount of water consumed.",
  },
  {
    icon: "📊",
    title: "Real-Time Monitoring",
    desc: "Track live water usage with interactive dashboards.",
  },
  {
    icon: "🚨",
    title: "Leak Detection & Alerts",
    desc: "Instant notifications help prevent water wastage.",
  },
  {
    icon: "📑",
    title: "Analytics & Reporting",
    desc: "Smart insights for residents, managers, and communities.",
  },
  {
    icon: "🌍",
    title: "Sustainability Impact",
    desc: "Enabling long-term conservation and reduced demand.",
  },
];

export default function Solutions() {
  return (
    <div className="solutionus">
      {/* === What We Do === */}
      <section id="what-we-do" className="section image-section">
        {/* ✅ Background Video */}
        <video
          className="background-video"
          src={appVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Content Overlay */}
        <div className="image-overlay">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={zoomIn}
            className="section-title animated-text"
          >
            What We Do
          </motion.h2>

          <motion.div
            className="cards"
            variants={staggerContainer}
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
            className="section-title animated-text"
          >
            How It Works
          </motion.h2>
          <motion.ol
            className="list"
            variants={staggerContainer}
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
              <motion.li key={i} variants={fadeInRight}>
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
            className="section-title animated-text"
          >
            Our Impact
          </motion.h2>
          <motion.ul
            className="list"
            variants={staggerContainer}
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
              <motion.li key={i} variants={fadeInLeft}>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>
    </div>
  );
}
