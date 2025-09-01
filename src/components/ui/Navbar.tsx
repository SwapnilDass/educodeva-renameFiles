import SingupPopup from "@/components/shared/SignupPopup";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowPopup = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="z-50 flex h-[50px] w-screen items-center justify-center">
      <div className="flex h-full w-[90%] items-center justify-between rounded-xl border border-[#9373d95e] px-4 max-sm:hidden sm:w-[95%] md:w-[80%] lg:w-[65%]">
        <img
          src="../../../brand/png/Branding.png"
          alt=""
          className="h-[50%] max-md:h-[30%]"
        />
        <div className="flex h-full items-center justify-center gap-4">
          <a
            href="/"
            className="flex aspect-square h-[60%] cursor-pointer flex-col items-center justify-center gap-1 rounded-md bg-[#C2A6FF] bg-opacity-30"
          >
            <img src="../../../nav/nav_1.png" alt="" className="h-[40%]" />
            <span className="w-[50%] border border-[#C2A6FF]"></span>
          </a>
          <a
            href="/"
            className="flex aspect-square h-[60%] cursor-pointer flex-col items-center justify-center gap-1 rounded-md bg-[#C2A6FF] bg-opacity-30"
          >
            <img src="../../../nav/nav_2.png" alt="" className="h-[40%]" />
            <span className="hidden w-[50%] border border-[#C2A6FF]"></span>
          </a>
          <a
            href="/"
            className="flex aspect-square h-[60%] cursor-pointer flex-col items-center justify-center gap-1 rounded-md bg-[#C2A6FF] bg-opacity-30"
          >
            <img src="../../../nav/nav_3.png" alt="" className="h-[40%]" />
            <span className="hidden w-[50%] border border-[#C2A6FF]"></span>
          </a>
          <a
            href="/"
            className="flex aspect-square h-[60%] cursor-pointer flex-col items-center justify-center gap-1 rounded-md bg-[#C2A6FF] bg-opacity-30"
          >
            <img src="../../../nav/nav_4.png" alt="" className="h-[40%]" />
            <span className="hidden w-[50%] border border-[#C2A6FF]"></span>
          </a>
          <a
            href="/"
            className="flex aspect-square h-[60%] cursor-pointer flex-col items-center justify-center gap-1 rounded-md bg-[#C2A6FF] bg-opacity-30"
          >
            <img src="../../../nav/nav_5.png" alt="" className="h-[40%]" />
            <span className="hidden w-[50%] border border-[#C2A6FF]"></span>
          </a>
        </div>
        <a href="/" className="flex h-full items-center justify-center">
          <button
            type="button"
            onClick={handleShowPopup}
            className="h-[70%] w-40 rounded-lg bg-white/70 text-black transition-all duration-500 hover:bg-white max-md:w-28"
          >
            Get Started
          </button>
        </a>
      </div>
      <div className="flex h-full w-[80%] items-center justify-between rounded-xl border border-[#9373d95e] px-4 sm:hidden">
        <img src="../../../brand/png/Branding.png" alt="" className="h-[45%]" />
        <div className="flex h-full w-10 cursor-pointer items-center justify-center">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <SingupPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
