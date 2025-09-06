import React from "react";
import "../../../../styles/Login-styles/greeting.css";

interface GreetingProps {
  title?: string;
}

const Greeting: React.FC<GreetingProps> = ({ 
  title = "Hey! Glad to see you again."
}) => {
  return (
    <div className="greeting-container">
      {/* Main greeting */}
      <h1 className="greeting-main">{title}</h1>

      {/* Sub greeting split into two lines */}
      <div className="greeting-sub">
        <p>👋 Welcome back! Log In or Sign Up to</p>
        <p>your account below.</p>
      </div>
    </div>
  );
};

export default Greeting;
