import "../../styles/index.css";
import Login from "./Login/login";

export default function Landing() {
  return (
    <section id="landing" className="h-[100vh] w-[100vw] bg-black text-white">
      <Login />
    </section>
  );
}
