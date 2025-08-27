import BlurFade from "@/components/ui/blur-fade"

export default function Partners() {
    return (
        <section className="w-full px-4 bg-[#050222] pt-12 ">
            <BlurFade delay={0.5} inView>
            <div className="flex flex-col items-center justify-center gap-y-4 text-xs sm:gap-y-6 sm:text-sm lg:text-base max-md:h-[50vh] h-[20vh] ">
                <div className="flex items-center w-full">
                    <span className="flex-grow border-t border-white/60"></span>
                    <h3 className=" relative mx-4 text-xl uppercase text-center
                    before:content-[''] 
                    before:absolute before:left-0 before:bottom-0 
                    before:bg-gradient-to-b
                    from-transparent
                    to-[#050222]
                    before:w-full
                    before:h-full">
                        trusted by students at
                    </h3>
                    <span className="flex-grow border-t border-white/60"></span>
                </div>
                <div className="flex relative top-[-30px] justify-around max-md:flex-col items-center max-md:gap-4 max-md:py-8 h-full w-full">
                    <img
                        className="h-[50%] max-md:h-[25%]"
                        src="../../../../logos/waterloo_uni.png"
                    />
                    <img
                        className="h-[50%] max-md:h-[20%]"
                        src="../../../../logos/MIT_uni.png"
                    />
                    <img
                        className="h-[90%] max-md:h-[70%]"
                        src="../../../../logos/nyu_uni.png"
                    />
                </div>
            </div>
            </BlurFade>
      </section>
    )
}