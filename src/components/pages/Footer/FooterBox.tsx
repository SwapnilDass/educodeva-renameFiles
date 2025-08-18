import React from "react";
import "../../../styles/Footer-styles/footer-box.css";

const FooterBox: React.FC = () => {
  return (
    <footer className="footer-box">
      <div className="footer-container">
        {/* Left side: brand + description */}
        <div className="footer-left">
          <div className="footer-brand">
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
            <h2 className="footer-title">Codeva.</h2>
          </div>

          {/* Description directly below brand */}
          <p className="footer-description">
            The first global AI platform where students learn, connect and
            compete in STEM events — powered by community.
          </p>
        </div>

        {/* Right side: links */}
        <div className="footer-links">
          <div>
            <h3>Product</h3>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Integration</li>
              <li>Changelog</li>
            </ul>
          </div>

          <div>
            <h3>Resources</h3>
            <ul>
              <li>Documentation</li>
              <li>Tutorials</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Codeva. All rights reserved.</p>
        <div className="footer-legal">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterBox;
