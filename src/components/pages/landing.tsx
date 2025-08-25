import "../../styles/index.css";
import Hero from "./landing/hero";
import Events from "./landing/Events";
import Learning from "./landing/section-1/Learning"

export default function Landing() {
  return (
    <section id="landing" className="h-[100vh] w-[100vw] bg-black text-white">
      <Hero />
      <Events />
      <Learning/>
    </section>
  );
}
