import React from "react";
import { Link } from "react-router-dom";
import "../../../../styles/Login-styles/signUp.css"; // updated path for your folder structure

const Signup: React.FC = () => {
  return (
    <div className="signup-container">
      {/* Left Text */}
      <span className="signup-left-text">Don't have an account?</span>

      {/* Right Text as Link */}
      <Link to="/signup" className="signup-right-button">
        Sign Up Now!
      </Link>
    </div>
  );
};

export default Signup;
