import React from "react";
import FooterLogo from "./FooterLogo";
import GreetingBox from "./GreetingBox"; // main + sub greetings
import GetStartedButton from "./GetStartedButton"; // import the button
import "../../../styles/Footer-styles/footer-page.css";
import SubGreeting from "./SubGreeting";

import FooterBox from "./FooterBox";

const FooterPage: React.FC = () => {
  return (
    <footer className="footer-page">
      <div className="footer-logo-wrapper">
        <FooterLogo />
      </div>

      {/* Greeting Box (main + sub greetings) */}

      <div className="footer-content">
        <GreetingBox />

        <SubGreeting />

        {/* Get Started Button below the greetings */}
        <GetStartedButton label="Get Started" />
      </div>

      <FooterBox />
    </footer>
  );
};

export default FooterPage;
