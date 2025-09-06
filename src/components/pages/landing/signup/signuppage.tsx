//Reusing Codes.

import React from "react";
import EmailField from "../login/EmailField";
import OrDivider from "../login/ordivider";
import PassField from "../login/passfield";
import SocialButtons from "../login/socialbuttons";
import Footer from "../login/footer";
import Logo from "../login/logo";
import SignUpButton from "./signup-button";
import Greeting from "./signup-greeting";

import "../../../../styles/Login-styles/login.css";

const Signup: React.FC = () => {
  return (
    <div className="auth-page">
      {/* Transparent Grey Container */}
      <div className="auth-container">
        {/* Logo */}
        <Logo />

        {/* Greeting */}
        <Greeting />

        {/* Fields */}
        <EmailField />
        <PassField />

        {/* Signup button (reuse LoginButton, but customize text) */}
        <SignUpButton />

        {/* Divider */}
        <OrDivider />

        {/* Social signup */}
        <SocialButtons />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
