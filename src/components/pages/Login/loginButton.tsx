import React, { useState } from "react";
import "../../../styles/Login-styles/loginButton.css"; // make sure the path matches your folder

interface LoginButtonProps {
  label?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ label = "Log In" }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={`login-button ${clicked ? "login-button-clicked" : ""}`}
      onClick={() => setClicked(!clicked)} // toggle clicked state
    >
      {label}
    </button>
  );
};

export default LoginButton;
