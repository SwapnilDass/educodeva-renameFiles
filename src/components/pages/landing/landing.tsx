import "../../../styles/index.css";
import Hero from "./hero/hero";
import Learning from "./section-1/Learning"
import Events from "./section-2/Events";
import Testimonials from "./section-3/Testimonials";
//import Login from "./Login/login";
import FooterPage from "../Footer/FooterPage";
import Partners from "./partners/Partners";

export default function Landing() {
  return (
    <section id="landing" className="h-[100vh] w-[100vw] bg-[#050222] text-white">
      <div className="px-4 pt-4 overflow-hidden h-full ">
        <Hero />
      </div>
      <Partners />
      <Learning />
      <Events />
      <Testimonials />
      <FooterPage />
    </section>
  );
}
