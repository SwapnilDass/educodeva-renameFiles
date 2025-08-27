import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

export default function Navbar() {
    return (
        <div className="w-screen flex items-center justify-center h-[50px] z-50">
            <div className="border border-[#9373d95e] h-full w-[90%] sm:w-[95%] md:w-[80%] lg:w-[65%] rounded-xl px-4 flex items-center justify-between max-sm:hidden">
                <img src="../../../brand/png/Branding.png" alt="" className="h-[50%] max-md:h-[30%]" />
                <div className="flex items-center justify-center gap-4 h-full">
                    <a href="/" className="h-[60%] cursor-pointer aspect-square rounded-md flex items-center flex-col gap-1 justify-center bg-[#C2A6FF] bg-opacity-30">
                        <img src="../../../nav/nav_1.png" alt="" className="h-[40%]"/>
                        <span className="border border-[#C2A6FF] w-[50%]"></span>
                    </a>
                    <a href="/" className="h-[60%] cursor-pointer aspect-square rounded-md flex items-center flex-col gap-1 justify-center bg-[#C2A6FF] bg-opacity-30">
                        <img src="../../../nav/nav_2.png" alt="" className="h-[40%]"/>
                        <span className="border border-[#C2A6FF] w-[50%] hidden"></span>
                    </a>
                    <a href="/" className="h-[60%] cursor-pointer aspect-square rounded-md flex items-center flex-col gap-1 justify-center bg-[#C2A6FF] bg-opacity-30">
                        <img src="../../../nav/nav_3.png" alt="" className="h-[40%]"/>
                        <span className="border border-[#C2A6FF] w-[50%] hidden"></span>
                    </a>
                    <a href="/" className="h-[60%] cursor-pointer aspect-square rounded-md flex items-center flex-col gap-1 justify-center bg-[#C2A6FF] bg-opacity-30">
                        <img src="../../../nav/nav_4.png" alt="" className="h-[40%]"/>
                        <span className="border border-[#C2A6FF] w-[50%] hidden"></span>
                    </a>
                    <a href="/" className="h-[60%] cursor-pointer aspect-square rounded-md flex items-center flex-col gap-1 justify-center bg-[#C2A6FF] bg-opacity-30">
                        <img src="../../../nav/nav_5.png" alt="" className="h-[40%]"/>
                        <span className="border border-[#C2A6FF] w-[50%] hidden"></span>
                    </a>
                </div>
                <a  href="/" className="flex items-center justify-center h-full">
                    <button className="bg-white/70 hover:bg-white transition-all duration-500 text-black w-40 max-md:w-28 h-[70%] rounded-lg">Get Started</button>
                </a>
            </div>
            <div className="border border-[#9373d95e] h-full w-[80%] rounded-xl px-4 flex items-center justify-between sm:hidden">
                <img src="../../../brand/png/Branding.png" alt="" className="h-[45%]" />
                <div className="flex cursor-pointer items-center justify-center h-full w-10">
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </div>
    )
}