import React from "react";

const ContactPage = () => {
  return (
    <div>
      {/* Background Video */}
      <video autoPlay muted loop id="bg-video">
        <source
          src="https://cdn.pixabay.com/video/2025/06/20/286930_large.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML5 video.
      </video>

      {/* Contact Info */}
      <div id="contact-us">
        <h1>Contact Us</h1>
        <p>Email: hydroid@gmail.com</p>
        <p>Phone: +91 9876543210</p>
        <p>
          Address: 3rd Floor, Silver Soft IT Park, SiSoC Group, 23, Rd Number 7,
          <br />
          EPIP Zone, KIADB Export Promotion Industrial Area, Whitefield, <br />
          Bengaluru, Karnataka 560066
        </p>
      </div>

      {/* CSS inside JSX */}
      <style jsx>{`
        #bg-video {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1;
          top: 0;
          left: 0;
          overflow: hidden;
        }

        #contact-us {
          color: beige;
          text-align: center;
          margin-top: 100px;
          font-family: "arial", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
