import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Hydroid — All rights reserved.</p>
      </div>
    </footer>
  );
}
