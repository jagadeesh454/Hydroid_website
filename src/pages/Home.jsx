import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ChevronRight } from "lucide-react";
import Container from "../components/Container";
import Section from "../components/Section";
import Pill from "../components/Pill";
import backgroundVideo from "../assets/264948_tiny.mp4";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ✅ Sticky Transparent Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white text-gray-900 shadow-md" : "bg-transparent text-white"
        }`}
      >
        <nav className="flex justify-between items-center px-8 py-4">
          <div className="text-2xl font-bold">Hydroid</div>
          <ul className="flex gap-6 text-lg">
            {["home", "solutions", "about", "contact"].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-blue-500 transition"
              >
                <ScrollLink
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ✅ Fullscreen Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* ✅ Dark Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-[-1]"></div>

      {/* ✅ Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center h-screen text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Smart Solutions for Water & Gas Management
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Reliable, efficient, and innovative solutions for modern utilities
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* ✅ About Section (Over video) */}
      <Section
        id="about"
        className="relative text-white py-16 bg-black/30 backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg max-w-2xl">
          Hydroid is committed to delivering innovative IoT solutions for
          utilities and enterprises. Our technology ensures accurate data,
          operational efficiency, and cost savings.
        </p>
      </Section>

      {/* ✅ Contact Section (Over video) */}
      <Section
        id="contact"
        className="relative text-white py-16 bg-black/30 backdrop-blur-md"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="mb-4">Get in touch for a demo or more information.</p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Contact Now
        </button>
      </Section>
    </>
  );
}
