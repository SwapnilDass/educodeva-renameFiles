// src/components/Greeting.tsx
import React from "react";

const Greeting: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-[90%]">
      {/* Main greeting */}
      <h1
            className="
                text-white 
                text-center 
                font-[Inter] 
                font-extrabold 
                text-[25px] 
                leading-[normal]
                mt-6
            "
        >
        Hey! Glad to see you again.
        </h1>

      {/* Sub greeting */}
      {/* Sub greeting split into two lines */}
      <div className="mt-4 flex flex-col gap-1">
        <p
          className="
            text-white/80 
            font-[Inter] 
            font-normal 
            text-[24px] 
            leading-relaxed
          "
        >
          👋 Welcome back! Log In or Sign Up to
        </p>
        <p
          className="
            text-white/80 
            font-[Inter] 
            font-normal 
            text-[24px] 
            leading-relaxed
          "
        >
            your account below.
        </p>
    </div>
    </div>
  );
};

export default Greeting;
