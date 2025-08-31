import React from "react";
import EmailField from "../Login/EmailField";
import OrDivider from "../Login/OrDivider";
import PassField from "../Login/PassField";
import SocialButtons from "../Login/SocialButtons";
import Footer from "../Login/footer";
import Logo from "../Login/logo";
import SignUpButton from "./signup-button";
import Greeting from "./signup-greeting";

const Signup: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#050222]">
      {/* Transparent Grey Container */}
      <div className="flex h-[780px] w-full min-w-[600px] max-w-[600px] flex-col items-center rounded-[25px] border border-white/20 bg-gray-800/50 p-6 shadow-md backdrop-blur-[15px]">
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
