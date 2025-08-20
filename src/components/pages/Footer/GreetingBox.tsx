import React from "react";
import "../../../styles/Footer-styles/greeting-box.css";

const GreetingBox: React.FC = () => {
  return (
    <div className="greeting-container">
      <h1 className="greeting-main">
        <span className="main-greeting-normal">Ready to</span>
        <span className="main-greeting-gradient">Sharpen your Skills?</span>
      </h1>
    </div>
  );
};

export default GreetingBox;
