import "../../../styles/index.css";
import Hero from "./hero/hero";
import Learning from "./section-1/Learning";
import Events from "./section-2/Events";
import Testimonials from "./section-3/Testimonials";
import FooterPage from "../Footer/FooterPage";
import Partners from "./partners/Partners";

export default function Landing() {
  return (
    <section
      id="landing"
      className="h-[100vh] w-[100vw] bg-[#050222] text-white"
    >
      <div className="overflow-hidden bg-inherit px-4 pt-4">
        <Hero />
      </div>
      <Partners />
      <Learning />
      <Events className="py-12" />
      <Testimonials className="py-12" />
      <FooterPage />
    </section>
  );
}
