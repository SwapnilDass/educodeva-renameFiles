import React from "react";
import "../../../../styles/Footer-styles/footer-box.css";

const FooterBox: React.FC = () => {
  return (
    <footer className="footer-box">
      <div className="footer-main-container">
        {/* Left side: brand + description */}
        <div className="footer-left-container">
          <div className="footer-brand-container">
            <svg
              width="40"
              height="40"
              viewBox="0 0 288 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="footer-box-logo"
            >
              <path
                d="M0 0C13.2022 11.3407 24.5382 18.4334 43.672 19.0978H239.44C246.029 19.0978 251.846 23.3968 253.78 29.6949L287.231 138.637C269.561 121.96 259.506 116.409 238.78 116.082H47.084C40.4986 116.082 34.6833 111.787 32.747 105.493L18.7125 59.8709L0 0Z"
                fill="white"
              />
            </svg>
            <h2 className="footer-brand-title">Codeva.</h2>
          </div>

          <p className="footer-brand-description">
            The first global AI platform where students learn, connect and
            compete in STEM events — powered by community.
          </p>
        </div>

        {/* Right side: links */}
        <div className="footer-links-container">
          <div className="footer-link-column">
            <h3 className="footer-link-title">Product</h3>
            <ul className="footer-link-list">
              <li className="footer-link-item">Features</li>
              <li className="footer-link-item">Pricing</li>
              <li className="footer-link-item">Integration</li>
              <li className="footer-link-item">Changelog</li>
            </ul>
          </div>

          <div className="footer-link-column">
            <h3 className="footer-link-title">Resources</h3>
            <ul className="footer-link-list">
              <li className="footer-link-item">Documentation</li>
              <li className="footer-link-item">Tutorials</li>
              <li className="footer-link-item">Blog</li>
              <li className="footer-link-item">Support</li>
            </ul>
          </div>

          <div className="footer-link-column">
            <h3 className="footer-link-title">Company</h3>
            <ul className="footer-link-list">
              <li className="footer-link-item">About</li>
              <li className="footer-link-item">Careers</li>
              <li className="footer-link-item">Contact</li>
              <li className="footer-link-item">Partners</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer-bottom-section">
        <p>© 2025 Codeva. All rights reserved.</p>
        <div className="footer-legal-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterBox;
