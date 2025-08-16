//Reusing Codes.

import React from "react";
import Logo from "../Login/logo";
import Greeting from "./signup-greeting";
import EmailField from "../Login/EmailField";
import PassField from "../Login/PassField";
import LoginButton from "../Login/loginButton";
import OrDivider from "../Login/OrDivider";
import SocialButtons from "../Login/SocialButtons";
import Footer from "../Login/footer";

import "../../../styles/Login-styles/login.css";

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
        <LoginButton label="Sign Up" />

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
