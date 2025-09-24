import React from "react";
import { motion } from "framer-motion";
import saveWaterVideo from "../assets/save-water-video.mp4";
import journeyImg from "../assets/vila-and-building.jpg";
import journeyVideo from "../assets/our-story-bg.mp4"; // Import video

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

export default function AboutUs() {
  return (
    <div className="aboutus">
      {/* Hero Section */}
      <div className="hero">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={saveWaterVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 initial="hidden" animate="visible" variants={zoomIn}>
            Hydroid: Smarter Water for Every Home
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeInLeft} custom={1}>
            We build connected water metering and management solutions that help
            communities measure, monitor, and reduce water usage — ensuring
            fairness, safety, and sustainability.
          </motion.p>
          <motion.div
            className="cta-buttons"
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            custom={2}
          >
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="btn primary">
              Get a Quote
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="btn secondary">
              Request Demo
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
     <section id="about" className="about-section">
  <div className="about-video-container">
    {/* Background Video */}
    <video
      src={journeyVideo}
      autoPlay
      loop
      muted
      playsInline
      className="about-video"
    ></video>

    {/* Overlay Content */}
    <motion.div
      className="about-video-content two-column"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.img
        // src={journeyImg}
        // alt="Hydroid journey"
        variants={fadeInLeft}
      />
      <motion.div variants={fadeInRight}>
        <motion.h2 variants={zoomIn}>Our Story</motion.h2>
        <motion.p variants={fadeUp} custom={1}>
          What began as a response to rising water scarcity has grown into
          Hydroid — a platform designed to bring transparency and efficiency
          to water usage. From our first pilot installations, we saw that
          measurement leads to behavior change: families reduced their
          consumption by up to 30% when they could track usage in real time.
        </motion.p>
        <motion.p variants={fadeUp} custom={2}>
          Today, Hydroid provides both hardware and software — meters,
          dashboards, and mobile apps — to empower residents, societies, and
          facility managers to manage water better.
        </motion.p>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Mission & Vision */}
      <section className="mission-vision-section">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="background-video"
  >
    <source src="/src/assets/vision&mission.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <div className="content-overlay">
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={zoomIn}
    >
      Mission & Vision
    </motion.h2>

    <motion.div
      className="two-column"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={fadeInLeft}>
        <h3>Mission</h3>
        <p>
          To empower communities with tools that ensure fair billing,
          prevent water wastage, and make sustainable living easy.
        </p>
      </motion.div>
      <motion.div variants={fadeInRight}>
        <h3>Vision</h3>
        <p>
          A future where every apartment, building, and city has visibility
          into water consumption — driving conservation, fairness, and
          resilience.
        </p>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* What We Do */}
      <section className="section">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
          What We Do
        </motion.h2>
        <motion.div
          className="cards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            "💧 Smart Metering — IoT-enabled precise measurement.",
            "⚖️ Fair Billing — Pay only for what you consume.",
            "📊 Real-Time Monitoring — Live dashboards.",
            "🚨 Leak Detection & Alerts — Early warnings.",
            "📑 Analytics & Reporting — Insights for managers.",
            "🌍 Sustainability Impact — Reduced water demand.",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="card"
              variants={zoomIn}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              {text}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="section light">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
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
      </section>

      {/* Impact */}
      <section className="section">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
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
      </section>

      {/* Timeline */}
      <section className="section light">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
          Our Journey
        </motion.h2>
        <motion.ul
          className="timeline"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            "2019 — Idea born during a water crisis.",
            "2020 — First prototype tested in residential complex.",
            "2021 — Commercial launch, 500+ meters installed.",
            "2022 — Web & mobile dashboards introduced.",
            "2023 — Cross-city installations and enterprise clients onboarded.",
            "2024 — Recognized in water innovation awards.",
          ].map((item, i) => (
            <motion.li key={i} variants={fadeUp}>
              <strong>{item.split("—")[0]}</strong> —{item.split("—")[1]}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Team */}
      <section className="section">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={zoomIn}>
          Meet Our Team
        </motion.h2>
        <motion.div
          className="cards team"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { title: "Founder & CEO", desc: "Passionate about sustainability and technology, with background in engineering/management." },
            { title: "CTO", desc: "20+ years in IoT, cloud systems, and real-time data processing." },
            { title: "Head of Operations", desc: "Leads deployments and customer success, ensuring smooth adoption in communities." },
          ].map((member, i) => (
            <motion.div
              key={i}
              className="card"
              variants={zoomIn}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <h3>{member.title}</h3>
              <p>{member.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Final CTA */}
      <motion.div
        className="final-cta"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={zoomIn}
      >
        <h2>We are changing the way the world uses water — one meter at a time.</h2>
        <div className="cta-buttons">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="btn primary">
            Get a Quote
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="btn secondary">
            Request Demo
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="btn secondary">
            Partner With Us
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
