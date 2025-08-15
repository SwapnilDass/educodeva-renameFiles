import React from "react";
import "../../../styles/greeting.css"; // updated path for your folder structure

const Greeting: React.FC = () => {
  return (
    <div className="greeting-container">
      {/* Main greeting */}
      <h1 className="greeting-main">
        Hey! Glad to see you again.
      </h1>

      {/* Sub greeting split into two lines */}
      <div className="greeting-sub">
        <p>👋 Welcome back! Log In or Sign Up to</p>
        <p>your account below.</p>
      </div>
    </div>
  );
};

export default Greeting;

