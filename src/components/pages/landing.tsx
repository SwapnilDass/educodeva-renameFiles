import "../../styles/index.css";
import Login from "./Login/login";
import Signup from "./Signup/signup";

export default function Landing() {
  return (
    <section id="landing" className="h-[100vh] w-[100vw] bg-black text-white">
      <Login />
      <Signup />
    </section>
  );
}
