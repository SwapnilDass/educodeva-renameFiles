import "../../styles/index.css";
import Login from "./landing/login";
import TestimonialSection from "./landing/section-3/TestimonialSection";

export default function Landing() {
  return (
    <section id="landing" className="h-[100vh] w-[100vw] bg-black text-white">
      <Login />
      <TestimonialSection />
    </section>
  );
}
