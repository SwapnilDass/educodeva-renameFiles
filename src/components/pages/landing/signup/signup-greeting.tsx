import React from "react";
import "../../../../styles/Signup-styles/greeting.css";

interface GreetingProps {
  title?: string;
  subtitle?: string;
}

const Greeting: React.FC<GreetingProps> = ({
  title = "Millions of Students. One Platform.",
  subtitle = "Sign up today and join millions of students worldwide on their learning journey. Code, Hangout & Practice together, all through One Platform.",
}) => {
  return (
    <div className="signup-greeting-container">
      {/* Main greeting */}
      <h1 className="signup-greeting-main">{title}</h1>

      {/* Sub greeting */}
      <div className="signup-greeting-sub">
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Greeting;
