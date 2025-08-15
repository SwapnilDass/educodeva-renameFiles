import React from "react";
import "../../../styles/loginButton.css"; // updated path for your folder structure

const LoginButton: React.FC = () => {
  return (
    <button
      className="login-button"
      onClick={() => {
        console.log("Login clicked!");
        // Add your login logic here
      }}
    >
      Login
    </button>
  );
};

export default LoginButton;

