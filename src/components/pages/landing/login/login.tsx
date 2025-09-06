import React from "react";
import Logo from "./logo";
import Greeting from "./greeting";
import EmailField from "./EmailField";
import PassField from "./passfield";
import LoginButton from "./loginButton";
import Signup from "./signup";
import OrDivider from "./ordivider";
import SocialButtons from "./socialbuttons";
import Footer from "./footer";
import "../../../../styles/Login-styles/login.css";


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
        <Signup />

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
