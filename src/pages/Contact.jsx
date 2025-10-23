import { useState } from "react";
import "../index.css";

export default function ContactUs() {
  const [showForm, setShowForm] = useState(false);

  const handleRegisterClick = () => {
    setShowForm(true);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const encode = (str) => encodeURIComponent(str || "");

  const handleEmailClick = (e) => {
    e.preventDefault();

    const to = "hydroid.iot@gmail.com";
    const subject = "Inquiry from Hydroid Website";
    const body = `Hello Hydroid Team,

I would like to get in touch regarding...`;

    // Gmail compose URL (desktop)
    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encode(to)}` +
      `&su=${encode(subject)}&body=${encode(body)}`;

    // mailto (mobile fallback)
    const mailto = `mailto:${to}?subject=${encode(subject)}&body=${encode(body)}`;

    // Detect mobile vs desktop (simple UA-based check)
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Mobile: prefer native mail app via mailto:
      // Keep href present so if browser supports mailto it will work
      window.location.href = mailto;
    } else {
      // Desktop: open Gmail compose in a new tab
      // This will open compose directly if the user is signed into Gmail
      // Use noopener,noreferrer for security
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="contact-page">
      {/* Background Video */}
      <video autoPlay muted loop id="bg-video" className="bg-video">
        <source
          src="https://cdn.pixabay.com/video/2025/06/20/286930_large.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      <section id="contact-section">
        <h1>Contact Us</h1>

        <div className="top-wrapper">
          {/* Contact Info */}
          <div className="contact-info">
            <p>
              Email:{" "}
              <a
                href="mailto:hydroid.iot@gmail.com"
                onClick={handleEmailClick}
                className="contact-email"
              >
                hydroid.iot@gmail.com
              </a>
            </p>
            <p>Phone: +91 9876543210</p>
            <p>
              Address: 3rd Floor, Silver Soft IT Park, SiSoC Group, 23, Rd Number 7,
              <br />
              EPIP Zone, KIADB Export Promotion Industrial Area, Whitefield,
              <br />
              Bengaluru, Karnataka 560066
            </p>
          </div>

          {/* Map */}
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1261636026653!2d77.73981137507794!3d12.9698353873415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13d88b8a44ed%3A0xf037ccf0a74502f6!2sEPIP%20Zone%2C%20Whitefield%2C%20Bengaluru%2C%20Karnataka%20560066!5e0!3m2!1sen!2sin!4v1699886512345"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
        </div>

        {/* Register Button */}
        <button className="register-btn" onClick={handleRegisterClick}>
          Register
        </button>

        {/* Contact Form */}
        {showForm && (
          <div id="contact-form" className="contact-wrapper">
            <form>
              <h2>Send a Message</h2>
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="text"
                name="company"
                placeholder="Your Company Name"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message here..."
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </section>
    </div>
  );
}
