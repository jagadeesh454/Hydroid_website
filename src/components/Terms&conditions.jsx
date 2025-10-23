// TermsAndConditions.jsx
import React, { useEffect } from "react";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="content-page terms-page"
      aria-label="Terms and Conditions"
      style={{ paddingTop: "6rem" }} // <-- added space below navbar
    >
      <div className="container">
        <h1>Hydroid Gas — Terms &amp; Conditions</h1>
        <p className="muted">Last Updated: October 23, 2025</p>

        <p>
          Welcome to <strong>Hydroid Gas</strong>. These Terms and Conditions
          ("Terms") govern your use of our website, mobile application, and all
          related services. By accessing or using our services, you agree to
          comply with these Terms. If you do not agree, please discontinue using
          our platform.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>By creating an account or using any Hydroid Gas service, you confirm that you:</p>
        <ul>
          <li>Are at least 18 years old.</li>
          <li>Agree to these Terms, our Privacy Policy, and all applicable laws.</li>
          <li>Will use Hydroid Gas services only for lawful purposes.</li>
        </ul>
        <p>
          We may modify these Terms at any time, and continued use after changes means you
          accept the updated Terms.
        </p>

        <h2>2. Services Provided</h2>
        <p>
          Hydroid Gas provides digital tools to manage LPG connections and gas
          consumption, including:
        </p>
        <ul>
          <li>Real-time gas usage tracking.</li>
          <li>Recharge and cylinder request management.</li>
          <li>Valve control and emergency features.</li>
          <li>Notifications, ticketing, and customer support services.</li>
        </ul>

        <h2>3. Account Registration</h2>
        <p>
          To access certain features, you must register an account using
          accurate and complete information. You agree to:
        </p>
        <ul>
          <li>Keep your login credentials confidential.</li>
          <li>Immediately notify us if you suspect unauthorized access.</li>
          <li>Be responsible for all activities under your account.</li>
        </ul>
        <p>
          Hydroid Gas reserves the right to suspend or delete accounts that
          violate these Terms or contain false information.
        </p>

        <h2>4. User Responsibilities</h2>
        <p>
          While using our services, you agree <strong>not to</strong>:
        </p>
        <ul>
          <li>Use the platform for illegal or fraudulent purposes.</li>
          <li>Interfere with or disrupt the functioning of the system.</li>
          <li>Attempt to gain unauthorized access to servers or databases.</li>
          <li>Share, copy, or reverse-engineer our software or APIs.</li>
        </ul>
        <p>
          Violation of these terms may lead to suspension or permanent
          termination of your account.
        </p>

        <h2>5. Payments and Recharges</h2>
        <ul>
          <li>
            All payments for gas recharges or requests must be made through
            approved payment channels displayed on the Hydroid Gas platform.
          </li>
          <li>
            Once a transaction is confirmed, it is non-refundable except where
            required by law or in cases of verified transaction failure.
          </li>
          <li>
            Hydroid Gas does not store credit/debit card or UPI details.
            Payments are handled securely through trusted third-party gateways.
          </li>
        </ul>

        <h2>6. Data Privacy</h2>
        <p>
          Your privacy is important to us. Please read our{" "}
          <a href="/privacy">Privacy Policy</a> to understand how we handle your
          personal data.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          All content, trademarks, logos, software, and designs on Hydroid Gas
          are the exclusive property of{" "}
          <strong>Hydroid Gas Technologies Pvt. Ltd.</strong> You may not:
        </p>
        <ul>
          <li>
            Copy, modify, or reproduce any part of our platform without prior
            written permission.
          </li>
          <li>Use our brand name or logo for any unauthorized purpose.</li>
        </ul>

        <h2>8. System and Service Availability</h2>
        <p>
          We strive to keep Hydroid Gas services operational at all times.
          However, we cannot guarantee uninterrupted access due to maintenance,
          network or technical issues, or circumstances beyond our control.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>Hydroid Gas and its team are not responsible for:</p>
        <ul>
          <li>Any damages resulting from misuse of the platform.</li>
          <li>Losses due to technical failures, delays, or data inaccuracies.</li>
          <li>
            External service provider issues (such as network outages or payment
            failures).
          </li>
        </ul>
        <p>Use of the Hydroid Gas system is at your own risk.</p>

        <h2>10. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your account without
          notice if you violate these Terms or applicable laws. After
          termination, you will lose access to your account and related data.
        </p>

        <h2>11. Third-Party Links</h2>
        <p>
          Our website or app may include links to third-party services. Hydroid
          Gas is not responsible for the content, accuracy, or practices of
          external sites.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India. Any disputes arising
          from or related to Hydroid Gas services will be subject to the
          exclusive jurisdiction of courts in Bangalore, Karnataka, India.
        </p>

        <h2>13. Contact Us</h2>
        <address>
          Hydroid Gas Technologies Pvt. Ltd.<br />
          Bangalore, India<br />
          <strong>Email:</strong>{" "}
          <a href="mailto:hydroid.iot@gmail.com">hydroid.iot@gmail.com</a>
          <br />
          <strong>Website:</strong>{" "}
          <a href="https://www.hydroidgas.com">www.hydroidgas.com</a>
          <br />
          <strong>Phone:</strong> +91 9876 543 210
        </address>
      </div>
    </main>
  );
}
