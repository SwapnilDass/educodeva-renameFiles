import React from "react";

const Signup: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-1 gap-x-2">
      {/* Left Text */}
      <span
        className="
          text-[rgba(224,224,224,0.74)]
          font-inter
          text-[12px]
          font-medium
          leading-tight
          text-center
        "
      >
        Don't have an account?
      </span>

      {/* Right Text as Button */}
      <button
        className="
          font-inter
          text-[12px]
          font-semibold
          leading-[70px]
          bg-gradient-to-r from-[#9A58FF] via-[#ED066B] to-[#9A58FF]
          bg-clip-text
          text-transparent
          focus:outline-none
          active:scale-95
        "
        style={{ fontFeatureSettings: "'ss02' on" }}
        onClick={() => {
          console.log("Sign Up Now clicked!");
          // Add your navigation or signup logic here
        }}
      >
        Sign Up Now!
      </button>
    </div>
  );
};

export default Signup;
