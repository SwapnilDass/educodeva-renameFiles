import React from "react";

const Signup: React.FC = () => {
  return (
    <div className="inline-flex justify-center items-center mt-1 gap-x-2">
      {/* Left Text */}
      <span
        className="
          text-[rgba(224,224,224,0.74)]
          font-inter
          text-[12px]
          font-medium
          leading-none
          text-center
        "
      >
        Don't have an account?
      </span>

      {/* Right Text */}
      <span
        className="
          font-inter
          text-[12px]
          font-semibold
          leading-[70px]
          bg-gradient-to-r from-[#9A58FF] via-[#ED066B] to-[#9A58FF]
          bg-clip-text
          text-transparent
        "
        style={{ fontFeatureSettings: "'ss02' on" }}
      >
        Sign Up Now!
      </span>
    </div>
  );
};

export default Signup;
