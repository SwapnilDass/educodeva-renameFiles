export default function Feature2() {
  return (
    <div
      className="
        bg-[#1E1B38] border border-white/20 rounded-[10px] p-5 md:p-6 flex flex-col justify-between h-full w-full overflow-hidden
      "
    >
      {/* Dashboard */}
      <div className="flex justify-center items-center gap-0 mb-4">
        <div className="relative w-[320px] md:w-[360px] lg:w-[400px]">
          <img
            src="/brand/png/Dashboard Preview.png"
            alt="Events and Teams Preview"
            className="w-full h-auto object-contain"
          />

          {/* Highlighted box*/}
          <div
            className="absolute top-[34%] left-[32.75%] w-[15%] h-[32%] border-[1px] border-[#ED066B] rounded-[1px]
            "
          />

          {/*Cursor icon */}
          <img
            src="brand/svg/Hand (Pointing).svg"
            alt="Cursor"
            className="absolute top-[55%] left-[46%] w-[5px] h-[5px] rotate-[-10deg] "
            />
        </div>
      </div>

      <div className="pl-2 md:pl-3 max-w-[92%] text-left">
        <h3 className="text-white text-[24px] md:text-[28px] font-medium leading-tight tracking-[-0.6px]">
          Find events & teams that fit you.
        </h3>
        <p className="mt-3 text-white/70 text-[15px] md:text-[16px] leading-relaxed">
          Whether you’re into online events or in-person ones, we've got you covered,
          simply apply your filter, and watch the magic happen!
        </p>
      </div>
    </div>
  );
}
