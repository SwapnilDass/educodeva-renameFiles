import "../../styles/index.css";
import Hero from "./landing/hero";

export default function Landing() {
  return (
    <section id="landing" className="h-[100vh] w-[100vw] bg-black text-white">
      <Hero />
    </section>
  );
}
