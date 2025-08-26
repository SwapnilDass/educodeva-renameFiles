import "../../../styles/index.css";
import Hero from "./hero";
import Events from "./section-2/Events";
import Testimonials from "./section-3/Testimonials";
//import Login from "./Login/login";
import FooterPage from "../Footer/FooterPage";
import Learning from "./section-1/Learning"

export default function Landing() {
  return (
    <section id="landing" className="h-[100vh] w-[100vw] bg-black text-white">
      <Hero />
      <Learning />
      <Events />
      <Testimonials />
      <FooterPage />
      <Learning />
    </section>
  );
}
