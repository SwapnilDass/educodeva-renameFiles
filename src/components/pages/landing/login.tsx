import React from "react";
import Logo from "./logo";
import Greeting from "./greeting";
import EmailField from "./EmailField";
import PassField from "./PassField";

const Login: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#050222]">
      {/*Gray Layout*/}
      <div className="flex h-[650px] w-[50%] max-w-full flex-col items-center rounded-[25px] border-[3px] border-white/30 bg-white/10 p-10 backdrop-blur-[125px]">
        {/* Logo at the top */}
        <Logo />

        {/* Greeting text */}
        <Greeting />

        {/* Login content goes here */}
        <EmailField />
        <PassField />
      </div>
    </div>
  );
};

export default Login;
