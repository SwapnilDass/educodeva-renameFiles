import React, { useState } from "react";
import "../../../styles/Footer-styles/greeting-box.css"; // adjust path

const GreetingBox: React.FC = () => {
  return (
    <div className="greeting-box">
      <h2 className="greeting-title">
        Ready to <span className="greeting-accent">Sharpen your Skills?</span>
      </h2>
    </div>
  );
};

export default GreetingBox;
