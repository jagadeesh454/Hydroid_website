import React from "react";
import "./FaqPage.css";

export default function FAQPage() {
  return (
    <section id="main-section">
      <div id="heading">
        <h1 id="faq-img">
          <img src="https://cdn-icons-gif.flaticon.com/18998/18998273.gif" alt="FAQ Icon" />
          <span>
            Frequently Asked Questions <br /> (FAQ)
          </span>
        </h1>
      </div>

      <details className="faq">
        <summary>1. What is the cost of the digital water meter?</summary>
        <p>The cost varies by meter size, installation complexity, and features. Please contact our management for a specific quote.</p>
      </details>

      <details className="faq">
        <summary>2. How does the meter work?</summary>
        <p>The digital water meter converts analog water flow into digital readings, which can be viewed on the app or portal.</p>
      </details>

      <details className="faq">
        <summary>3. How long does installation take?</summary>
        <p>Installation usually takes 15–30 minutes and is typically done at the main water inlet in a horizontal position.</p>
      </details>

      <details className="faq">
        <summary>4. How can I access the app?</summary>
        <p>The app is available on the Google Play Store. Login details will be provided by our team.</p>
      </details>

      <details className="faq">
        <summary>5. How long does the battery last?</summary>
        <p>The battery backup lasts 2–3 years. Replacement is recommended after that period.</p>
      </details>

      <details className="faq">
        <summary>6. What warranty is provided?</summary>
        <p>The water meter comes with a 3-year warranty. The warranty is void if the device is tampered with.</p>
      </details>

      <details className="faq">
        <summary>7. Can I monitor my water usage in real-time?</summary>
        <p>Yes, water usage updates every 12 hours. You can track daily, weekly, and monthly usage.</p>
      </details>

      <details className="faq">
        <summary>8. Can the meter detect leaks?</summary>
        <p>Yes, the system detects continuous unusual water flow above 100 liters, which may indicate a leak.</p>
      </details>

      <details className="faq">
        <summary>9. What meter sizes are available?</summary>
        <p>We currently offer 15mm, 25mm, and 40mm meters.</p>
      </details>

      <details className="faq">
        <summary>10. Is the meter compatible with different water sources?</summary>
        <p>Yes, it works with municipal water, well water, rainwater systems, and solar water heating inlets.</p>
      </details>

      <details className="faq">
        <summary>11. What does the AMC (Annual Maintenance Contract) cover?</summary>
        <p>The AMC includes battery replacement, meter services, cloud, app, and billing support. It does not cover tampering damage.</p>
      </details>

      <details className="faq">
        <summary>12. Is my meter data secure?</summary>
        <p>Yes, your water consumption data is protected with robust security measures.</p>
      </details>

      <details className="faq">
        <summary>13. How will I receive my water bills?</summary>
        <p className="answer">Bills are generated from meter readings and sent electronically by your building management.</p>
      </details>

      <details className="faq">
        <summary>14. What are the project deliverables?</summary>
        <p>
          <strong>Hardware:</strong> Water meters, data loggers, communication modules, gateways. <br />
          <strong>Software:</strong> Mobile app, customer and admin portals. <br />
          <strong>Installation:</strong> Meter setup and plumbing adjustments. <br />
          <strong>Documentation:</strong> Project plan, manuals, demo video. <br />
          <strong>Training:</strong> For technicians, administrators, and customers. <br />
        </p>
      </details>
    </section>
  );
}
