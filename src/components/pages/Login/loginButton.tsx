import React, { useState } from "react";
import "../../../styles/Login-styles/loginButton.css"; // make sure the path matches your folder

const LoginButton: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <button
      className={`login-button ${clicked ? "login-button-clicked" : ""}`}
      onClick={() => setClicked(!clicked)} // toggle clicked state
    >
      Log In
    </button>
  );
};

export default LoginButton;
