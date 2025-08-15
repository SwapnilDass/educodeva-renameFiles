import React from "react";
import Logo from "./logo";
import Greeting from "./greeting";
import EmailField from "./EmailField";
import PassField from "./PassField";
import LoginButton from "./loginButton";
import SignUp from "./signUp";
import OrDivider from "./OrDivider";
import SocialButtons from "./SocialButtons";

const Login: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#050222]">
      {/*Gray Layout*/}
      <div className="flex h-[750px] w-[50%] max-w-full flex-col items-center rounded-[25px] border-[3px] border-white/30 bg-white/10 p-6 backdrop-blur-[125px]">
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
      </div>
    </div>
  );
};

export default Login;
