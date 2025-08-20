import "../../styles/index.css";
import Login from "./Login/login";
import FooterPage from "./Footer/FooterPage";

export default function Landing() {
  return (
    <section id="landing" className="h-[100vh] w-[100vw] bg-black text-white">
      <FooterPage />
    </section>
  );
}
