import React, { useState } from "react";
import "../../../styles/Footer-styles/getStartedButton.css"; // adjust path

interface GetStartedButtonProps {
  label?: string;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ label = "Get Started" }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={`get-started-button ${clicked ? "get-started-button-clicked" : ""}`}
      onClick={() => setClicked(!clicked)} // toggle clicked state
    >
      {label}
    </button>
  );
};

export default GetStartedButton;
