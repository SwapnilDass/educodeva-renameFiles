import React from "react";
import Logo from "./logo";
import Greeting from "./greeting";
import EmailField from "./EmailField";
import PassField from "./PassField";
import LoginButton from "./loginButton";
import SignUp from "./signUp";
import OrDivider from "./OrDivider";
import SocialButtons from "./SocialButtons";
import Footer from "./footer";
import "../../../styles/Login-styles/login.css";

import "../../../styles/Login-styles/login.css"; // Import CSS file

const Login: React.FC = () => {
  return (
    <div className="auth-page">
      {/*Gray Layout*/}
      <div className="auth-container">
        {/* Logo at the top */}
        <Logo />

        {/* Greeting text */}
        <Greeting />

        {/* Login content goes here */}
        <EmailField />
        <PassField />
        <LoginButton />

        {/*Sign up */}
        <SignUp />

        {/*Divider */}
        <OrDivider />

        {/*Social Buttons */}
        <SocialButtons />

        {/*Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Login;
