import React, { useState } from "react";
import "../../../styles/Signup-styles/signUpButton.css"; // make sure the path matches your folder

interface LoginButtonProps {
  label?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ label = "Sign up" }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={`signUp-button ${clicked ? "signUp-button-clicked" : ""}`}
      onClick={() => setClicked(!clicked)} // toggle clicked state
    >
      {label}
    </button>
  );
};

export default LoginButton;
