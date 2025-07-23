import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>Asset Manager</h3>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>

      <div className="footer-links">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
