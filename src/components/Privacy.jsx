// Privacy.jsx
import React, { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0); // ensure page top when navigating
  }, []);

  return (
    <main
      className="content-page policy-page"
      aria-label="Privacy Policy"
      style={{ paddingTop: "6rem" }} // <-- added space below navbar
    >
      <div className="container">
        <h1>Hydroid Gas — Privacy Policy</h1>
        <p className="muted">Last Updated: October 23, 2025</p>

        <p>
          At <strong>Hydroid Gas</strong>, your privacy is our top priority. This
          Privacy Policy explains how we collect, use, and protect your
          personal information when you use our website, mobile app, or
          services. By using Hydroid Gas, you agree to this Privacy Policy.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following information when you interact with our services:</p>
        <ul>
          <li><strong>Personal details:</strong> Name, email address, phone number, and address.</li>
          <li><strong>Account details:</strong> Username, password, and login credentials.</li>
          <li><strong>Device data:</strong> Serial number, gas meter ID, and device usage statistics.</li>
          <li><strong>Transaction data:</strong> Cylinder requests, recharge history, and invoices.</li>
          <li><strong>Technical data:</strong> IP address, browser type, operating system, and usage logs.</li>
        </ul>
        <p>We collect this information to manage your account, provide services, and improve user experience.</p>

        <h2>2. How We Use Your Information</h2>
        <p>Your data is used to:</p>
        <ul>
          <li>Provide and maintain your Hydroid Gas account.</li>
          <li>Display your gas balance, usage, and device status in real-time.</li>
          <li>Process recharges, requests, and support tickets.</li>
          <li>Send alerts, notifications, and updates about your gas consumption.</li>
          <li>Improve system security, performance, and reliability.</li>
          <li>Comply with applicable laws and safety regulations.</li>
        </ul>
        <p><strong>We do not sell or rent your personal data to any third party.</strong></p>

        <h2>3. Data Storage and Security</h2>
        <p>We take strong measures to protect your personal information:</p>
        <ul>
          <li>All data is securely stored on encrypted servers.</li>
          <li>Communication between your browser/app and our servers uses <strong>HTTPS (SSL encryption)</strong>.</li>
          <li>Access to sensitive data is limited to authorized personnel only.</li>
          <li>We regularly update our systems to prevent unauthorized access or breaches.</li>
        </ul>
        <p>If a data breach occurs, we will notify affected users promptly as required by law.</p>

        <h2>4. Cookies and Tracking Technologies</h2>
        <p>Hydroid Gas may use cookies and analytics tools to:</p>
        <ul>
          <li>Improve user experience and website performance.</li>
          <li>Remember your login preferences.</li>
          <li>Analyze usage patterns to optimize services.</li>
        </ul>
        <p>You can control or disable cookies through your browser settings; however, disabling cookies may affect some features.</p>

        <h2>5. Sharing of Information</h2>
        <p>We may share data only with:</p>
        <ul>
          <li><strong>Authorized service providers</strong> who help operate our systems (payment gateways, SMS/email providers).</li>
          <li><strong>Regulatory authorities</strong>, when required by law.</li>
        </ul>
        <p>We never share your personal information for advertising or marketing without your consent.</p>

        <h2>6. User Rights</h2>
        <p>You have full control over your personal information. You may:</p>
        <ul>
          <li>Access, update, or delete your account data.</li>
          <li>Request a copy of the information we store about you.</li>
          <li>Withdraw consent to certain types of data usage.</li>
        </ul>
        <p>To make such requests, contact us at <a href="mailto:support@hydroidgas.com">support@hydroidgas.com</a>.</p>

        <h2>7. Data Retention</h2>
        <p>We retain user data only as long as necessary for providing our services or complying with legal obligations. Once data is no longer required, it is securely deleted.</p>

        <h2>8. Children’s Privacy</h2>
        <p>Hydroid Gas does not knowingly collect personal information from individuals under the age of 18. If you believe a minor has provided data to us, please contact us immediately to remove it.</p>

        <h2>9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy occasionally to reflect new features or legal requirements. Updated policies will be posted on this page with the “Last Updated” date.</p>

        <h2>10. Contact Us</h2>
        <address>
          Hydroid Gas Technologies Pvt. Ltd.<br />
          Bangalore, India<br />
          <strong>Email:</strong> <a href="mailto:hydroid.iot@gmail.com">hydroid.iot@gmail.com</a><br />
          <strong>Website:</strong> <a href="https://www.hydroidgas.com">www.hydroidgas.com</a><br />
          <strong>Phone:</strong> +91 9876 543 210
        </address>
      </div>
    </main>
  );
}
