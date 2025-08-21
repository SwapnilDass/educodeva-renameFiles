import "../../styles/index.css";
import Hero from "./landing/hero";
import Events from "./landing/section-2/Events";
import Testimonials from "./landing/section-3/Testimonials";
//import Login from "./Login/login";
import FooterPage from "./Footer/FooterPage";

export default function Landing() {
  return (
    <section id="landing" className="h-[100vh] w-[100vw] bg-black text-white">
      <Hero />
      <Events />
      <Testimonials />
      <FooterPage />
    </section>
  );
}
