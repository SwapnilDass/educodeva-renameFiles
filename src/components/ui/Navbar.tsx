import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

export default function Navbar() {
  return (
    <div className="w-screen flex items-center justify-center h-[50px] z-50">
      {/* Desktop / Tablet Navbar */}
      <div className="hidden md:flex w-[90%] sm:w-[95%] md:w-[80%] lg:w-[65%] border border-[#9373d95e] h-full rounded-xl px-4 items-center justify-between">
        {/* Logo */}
        <img
          src="../../../brand/png/Branding.png"
          alt="Codeva"
          className="h-[50%] sm:h-[45%] md:h-[40%] lg:h-[50%]"
        />

        {/* Navigation Icons */}
        <div className="flex items-center justify-center gap-4 h-full">
          {[1, 2, 3, 4, 5].map((num) => (
            <a
              key={num}
              href="/"
              className="h-[60%] cursor-pointer aspect-square rounded-md flex flex-col items-center justify-center gap-1 bg-[#C2A6FF] bg-opacity-30"
            >
              <img
                src={`../../../nav/nav_${num}.png`}
                alt=""
                className="h-[40%]"
              />
            </a>
          ))}
        </div>

        {/* Get Started Button */}
        <a href="/" className="flex items-center justify-center h-full">
          <button className="bg-white/70 hover:bg-white transition-all duration-500 text-black w-40 max-md:w-28 h-[70%] rounded-lg">
            Get Started
          </button>
        </a>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden w-[80%] border border-[#9373d95e] h-full rounded-xl px-4 items-center justify-between">
        {/* Logo */}
        <img
          src="../../../brand/png/Branding.png"
          alt="Codeva"
          className="h-[45%]"
        />

        {/* Hamburger Menu */}
        <div className="flex cursor-pointer items-center justify-center h-[60%] w-10">
            <FontAwesomeIcon
                icon={faBars}
                className="h-full w-auto text-white/80" // slightly lighter color
                style={{ fontWeight: 300 }} // reduce heaviness
            />
        </div>
      </div>
    </div>
  );
}
