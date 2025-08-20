export default function Feature1() {
  return (
    <div className="bg-[#1E1B38] border border-white/20 rounded-[10px] shadow-[0_18px_40px_rgba(0,0,0,0.35)] px-5 pt-1 pb-4 md:px-6 md:pt-2 md:pb-5 flex flex-col justify-start gap-3 md:gap-4 w-full overflow-hidden"
    >
      {/* Phone Preview */}
      <div className="flex justify-center items-center gap-0">
        <div className="relative w-[200px] md:w-[220px] lg:w-[250px] overflow-hidden">
          <img
            src="/brand/png/Group 21 1.png"
            alt="Phone top"
            className="w-full h-auto object-cover
              [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]
              [-webkit-mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
          />
        </div>

        <div className="relative w-[200px] md:w-[220px] lg:w-[250px] overflow-hidden -ml-2">
          <img
            src="/brand/png/Group 21 2.png"
            alt="Phone bottom"
            className="w-full h-auto object-cover
              [mask-image:linear-gradient(to_top,black_80%,transparent_100%)]
              [-webkit-mask-image:linear-gradient(to_top,black_80%,transparent_100%)]"
          />
        </div>
      </div>

      {/* Text */}
      <div className="pl-2 md:pl-3 max-w-[92%] text-left">
        <h3 className="text-white text-[20px] md:text-[22px] font-medium leading-tight tracking-[-0.5px]">
          Learn interactively.
        </h3>
        <p className="text-white/70 text-[14px] md:text-[15px] leading-relaxed">
          Codeva offers a new fun, entertaining, and effective way of presenting
          information, simply start your course, and enjoy the ride!
        </p>
      </div>
    </div>
  );
}
