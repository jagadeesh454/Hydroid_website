import React from "react";
import "../index.css"; // Optional: only if you need global styles (otherwise remove this line)}

const WhyHydroid = () => {
  return (
    <section id="tpage" style={sectionStyle}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        id="bg-video"
        style={videoStyle}
      >
        <source
          src="https://cdn.pixabay.com/video/2024/02/06/199596-910653729_large.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>

      {/* Text over video */}
      <div className="hero-content" style={heroContentStyle}>
        <h2 style={headingStyle}>WhyHydroid</h2>
        <p style={paragraphStyle}>
          Hydroid is a next-generation smart water meter designed for homes,
          villas, and independent buildings.
          <br />
          Built on advanced ultrasonic technology, it ensures exceptional
          accuracy, zero maintenance, and seamless monitoring of your water
          usage.
        </p>
        <ul style={listStyle}>
          <li>
            Hydroid — a next-generation smart water meter for homes, villas, and
            independent buildings.
          </li>
          <li>
            Combines accurate flow measurement with digital connectivity and
            easy user access.
          </li>
        </ul>
      </div>
    </section>
  );
};

// ===== Inline Styles (migrated from your <style> tag) =====

const sectionStyle = {
  position: "relative",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  margin: 0,
  fontFamily: "Arial, sans-serif",
  color: "rgb(197,190,190)",
  background: "#000",
};

const videoStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  zIndex: -2,
};

const heroContentStyle = {
  position: "relative",
  zIndex: 1,
  maxWidth: "900px",
  padding: "20px",
};

const headingStyle = {
  fontSize: "clamp(2rem, 6vw, 3rem)",
  marginBottom: "20px",
  opacity: 0,
  transform: "translateY(-20px)",
  animation: "slideIn 1s ease-out forwards",
};

const paragraphStyle = {
  fontSize: "clamp(1rem, 2vw, 1.25rem)",
  lineHeight: 1.5,
  marginBottom: "20px",
  opacity: 0,
  transform: "translateY(20px)",
  animation: "textUp 1s ease-out forwards",
  animationDelay: "0.3s",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  fontSize: "1.1rem",
  lineHeight: 1.6,
  opacity: 0,
  transform: "translateY(20px)",
  animation: "textUp 1s ease-out forwards",
  animationDelay: "0.6s",
};

export default WhyHydroid;
