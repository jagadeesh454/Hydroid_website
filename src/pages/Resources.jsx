import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../index.css";

// ✅ Your original FAQ section (unchanged)
function FAQPage() {
  return (
    <section id="main-section">
      <div id="heading">
        <h1 id="faq-img">
          <img
            src="https://cdn-icons-gif.flaticon.com/18998/18998273.gif"
            alt="FAQ Icon"
          />
          <span>
            Frequently Asked Questions <br /> (FAQ)
          </span>
        </h1>
      </div>

      <details className="faq">
        <summary>1. What is the cost of the digital water meter?</summary>
        <p>
          The cost varies by meter size, installation complexity, and features.
          Please contact our management for a specific quote.
        </p>
      </details>

      <details className="faq">
        <summary>2. How does the meter work?</summary>
        <p>
          The digital water meter converts analog water flow into digital
          readings, which can be viewed on the app or portal.
        </p>
      </details>

      <details className="faq">
        <summary>3. How long does installation take?</summary>
        <p>
          Installation usually takes 15–30 minutes and is typically done at the
          main water inlet in a horizontal position.
        </p>
      </details>

      <details className="faq">
        <summary>4. How can I access the app?</summary>
        <p>
          The app is available on the Google Play Store. Login details will be
          provided by our team.
        </p>
      </details>

      <details className="faq">
        <summary>5. How long does the battery last?</summary>
        <p>
          The battery backup lasts 2–3 years. Replacement is recommended after
          that period.
        </p>
      </details>

      <details className="faq">
        <summary>6. What warranty is provided?</summary>
        <p>
          The water meter comes with a 3-year warranty. The warranty is void if
          the device is tampered with.
        </p>
      </details>

      <details className="faq">
        <summary>7. Can I monitor my water usage in real-time?</summary>
        <p>
          Yes, water usage updates every 12 hours. You can track daily, weekly,
          and monthly usage.
        </p>
      </details>

      <details className="faq">
        <summary>8. Can the meter detect leaks?</summary>
        <p>
          Yes, the system detects continuous unusual water flow above 100
          liters, which may indicate a leak.
        </p>
      </details>

      <details className="faq">
        <summary>9. What meter sizes are available?</summary>
        <p>We currently offer 15mm, 25mm, and 40mm meters.</p>
      </details>

      <details className="faq">
        <summary>10. Is the meter compatible with different water sources?</summary>
        <p>
          Yes, it works with municipal water, well water, rainwater systems, and
          solar water heating inlets.
        </p>
      </details>

      <details className="faq">
        <summary>11. What does the AMC (Annual Maintenance Contract) cover?</summary>
        <p>
          The AMC includes battery replacement, meter services, cloud, app, and
          billing support. It does not cover tampering damage.
        </p>
      </details>

      <details className="faq">
        <summary>12. Is my meter data secure?</summary>
        <p>
          Yes, your water consumption data is protected with robust security
          measures.
        </p>
      </details>

      <details className="faq">
        <summary>13. How will I receive my water bills?</summary>
        <p className="answer">
          Bills are generated from meter readings and sent electronically by
          your building management.
        </p>
      </details>

      <details className="faq">
        <summary>14. What are the project deliverables?</summary>
        <p>
          <strong>Hardware:</strong> Water meters, data loggers, communication
          modules, gateways. <br />
          <strong>Software:</strong> Mobile app, customer and admin portals.{" "}
          <br />
          <strong>Installation:</strong> Meter setup and plumbing adjustments.{" "}
          <br />
          <strong>Documentation:</strong> Project plan, manuals, demo video.{" "}
          <br />
          <strong>Training:</strong> For technicians, administrators, and
          customers. <br />
        </p>
      </details>
    </section>
  );
}

// ✅ Your original Case Studies section (unchanged)
function CaseStudies() {
  return (
    <section id="main-container-cs">
      <div id="contact-GT">
        <h1 id="heading-cs">Case studies</h1>
        <div id="text-container-cs">
          <h2 id="solution-head-cs">
            Transforming Communities with Smart Water Solutions
          </h2>
          <p id="paragh-WM">
            Discover how our innovative water metering solutions are
            making a real difference for communities across India.
          </p>
        </div>
      </div>

      <div id="list-container-cs">
        <ul id="list-items-cs">
          <li>
            <img
              src="https://superadmin.homes247.in/images/uploadPropertyImgs/1612521367-10.jpg"
              alt="Srinidhi The Central park"
              width="300"
              height="200"
            />
            <p className="text-line-cs">
              Srinidhi The Central Park optimized water usage, achieving up to
              40% savings with smart WaterOn metering solutions
            </p>
          </li>

          <li>
            <img
              src="https://assets.nobroker.in/media/building/8a9fcf82835edc6201835f0055f31655/images/8a9fcf82835edc6201835f0055f31655_others_pYfHMzZwyP1663753890518_71882_iris_medium.jpg"
              alt="Saroj bluebells"
              width="300"
              height="200"
            />
            <p className="text-line">
              Saroj bluebells optimized water usage, achieving up to 40% savings
              with smart WaterOn metering solutions
            </p>
          </li>

          <li>
            <img
              src="data:image/jpeg;base64,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"
              alt="Dwarakamai Apex Villa"
              width="300"
              height="200"
            />
            <p className="text-line">
              Dwarakamai Apex Villa optimized water usage, achieving up to 40%
              savings with smart WaterOn metering solutions
            </p>
          </li>
        </ul>
      </div>

      <div id="contact" className="contact-section" role="contentinfo">
        <h2>Get in Touch</h2>

        <p className="contact-line">
          <img
            src="https://cdn-icons-png.flaticon.com/128/126/126341.png"
            alt="Call"
            width="20"
          />
          +91-9078563412
        </p>

        <a href="mailto:hydroidwatermeter@gmail.com" className="contact-link">
          <img
            src="https://cdn-icons-png.flaticon.com/128/712/712040.png"
            alt="Gmail"
            width="20"
          />
          hydroidwatermeter@gmail.com
        </a>

        <p className="address">
          3rd Floor, Silver Soft IT Park, SiSoC Group, 23, Rd Number 7, EPIP
          Zone, KIADB Export
          <br />
          Promotion Industrial Area, Whitefield, Bengaluru, Karnataka 560066
        </p>

        <a
          id="web-app-link"
          href="https://play.google.com/store/apps/details?id=com.hydroid.water&hl=en"
          aria-label="Hydroid app on Google Play"
        >
          <img
            src="https://www.codot.gov/safety/impaired-driving/planahead/2011-assets/android-market-icon.png"
            alt="Google play"
            width="150"
          />
        </a>
      </div>
    </section>
  );
}

// ✅ Main Resources page (handles switching between FAQ & CaseStudies)
export default function Resources() {
  const location = useLocation();
  const [tab, setTab] = useState("faq");

  // Detect which tab (FAQ or CaseStudies) from URL query param
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const currentTab = params.get("tab");
    if (currentTab === "case") setTab("case");
    else setTab("faq");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.search]);

  // Show correct section based on ?tab=faq or ?tab=case
  return tab === "case" ? <CaseStudies /> : <FAQPage />;
}
