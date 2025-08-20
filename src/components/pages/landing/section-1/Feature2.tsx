export default function Feature2() {
  return (
    <div
      className="
        bg-[#1E1B38] border border-white/20 rounded-[10px]
        px-5 pt-2 pb-4 md:px-6 md:pt-3 md:pb-5
        flex flex-col justify-start gap-3 md:gap-4 w-full overflow-hidden
      "
    >
      {/* Dashboard Preview */}
      <div className="flex justify-center items-center gap-0">
        <div className="relative w-[320px] md:w-[360px] lg:w-[400px]">
          <img
            src="/brand/png/Dashboard Preview.png"
            alt="Events and Teams Preview"
            className="w-full h-auto object-contain"
          />

          {/* Highlighted Box */}
          <div className="absolute top-[34%] left-[32.75%] w-[15%] h-[32%] border-[1px] border-[#ED066B] rounded-[1px]" />

          {/* Cursor Icon */}
          <img
            src="/brand/svg/Hand (Pointing).svg"
            alt="Cursor"
            className="absolute top-[55%] left-[46%] w-[5px] h-[5px] rotate-[-10deg]"
          />
        </div>
      </div>

      {/* Text */}
      <div className="pl-2 md:pl-3 max-w-[92%] text-left">
        <h3 className="text-white text-[20px] md:text-[22px] font-medium leading-tight tracking-[-0.5px]">
          Find events & teams that fit you.
        </h3>
        <p className="text-white/70 text-[14px] md:text-[15px] leading-relaxed">
          Whether you're into online events or in-person ones, we've got you covered, simply apply your filter, and watch the magic happen!
        </p>
      </div>
    </div>
  );
}
