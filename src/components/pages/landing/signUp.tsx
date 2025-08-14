import React from "react";
import "../../../styles/signUp.css"; // updated path for your folder structure

const Signup: React.FC = () => {
  return (
    <div className="signup-container">
      {/* Left Text */}
      <span className="signup-left-text">
        Don't have an account?
      </span>

      {/* Right Text as Button */}
      <button
        className="signup-right-button"
        onClick={() => {
          console.log("Sign Up Now clicked!");
          // Add your navigation or signup logic here
        }}
      >
        Sign Up Now!
      </button>
    </div>
  );
};

export default Signup;

