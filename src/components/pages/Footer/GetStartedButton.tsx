import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/Footer-styles/getStartedButton.css";

interface GetStartedButtonProps {
  label?: string;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  label = "Get Started",
}) => {
  const navigate = useNavigate();

  return (
    <button
      className="get-started-button"
      onClick={() => navigate("/login")} // redirect to login
    >
      {label}
    </button>
  );
};

export default GetStartedButton;
