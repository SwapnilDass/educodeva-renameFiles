import React from "react";
import FooterLogo from "./FooterLogo";
import GreetingBox from "./GreetingBox"; // main + sub greetings
import GetStartedButton from "./GetStartedButton"; // import the button
import "../../../styles/Footer-styles/footer-page.css";

const FooterPage: React.FC = () => {
  return (
    <footer className="footer-page">
      <FooterLogo />

      {/* Greeting Box (main + sub greetings) */}
      <GreetingBox />

      {/* Get Started Button below the greetings */}
      <GetStartedButton label="Get Started" />
    </footer>
  );
};

export default FooterPage;
