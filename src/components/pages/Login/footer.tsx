import React from "react";
import "../../../styles/Login-styles/footer.css"; // Adjust the path based on your folder structure

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <p className="footer-text">By continuing, you agree to our</p>
      <div className="footer-links">
        <a href="/terms" className="footer-link">
          terms of service
        </a>
        <a href="/privacy" className="footer-link">
          privacy policy
        </a>
        <a href="/content" className="footer-link">
          content policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
