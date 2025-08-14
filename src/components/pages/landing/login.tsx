import React from "react";
import Logo from "./logo";
import Greeting from "./greeting";
import EmailField from "./EmailField";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#050222]">
      {/*Gray Layout*/}
      <div
        className="
          rounded-[25px] 
          border-[3px] border-white/30 
          bg-white/10 
          backdrop-blur-[125px] 
          p-10
          w-[50%] 
          max-w-full
          h-[650px]
          flex flex-col items-center
        "
      >
        {/* Logo at the top */}
        <Logo />

        {/* Greeting text */}
        <Greeting />
        
        {/* Login content goes here */}
        <EmailField/>
        
      </div>
    </div>
  );
};

export default Login;

