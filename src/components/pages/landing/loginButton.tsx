import React from "react";

const LoginButton: React.FC = () => {
  return (
    <button
      className="
        w-full max-w-[520px]
        rounded-[10px]
        h-[47px]
        bg-white
        text-black
        font-inter
        text-[14px]
        font-bold
        leading-none
        py-3 px-4
        mt-5
      "
    >
      Log In
    </button>
  );
};

export default LoginButton;
