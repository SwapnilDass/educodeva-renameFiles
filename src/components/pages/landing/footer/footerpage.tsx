import React from "react";
import FooterLogo from "./footerlogo";
import GreetingBox from "./greetingbox"; // main + sub greetings
import GetStartedButton from "./getstartedbutton"; // import the button
import "../../../../styles/Footer-styles/footer-page.css";
import SubGreeting from "./subgreeting";
import FooterBox from "./footerbox";

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
