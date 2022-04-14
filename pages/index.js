import Header from "../components/LayoutWrapper/Header";
import Footer from "../components/LayoutWrapper/Footer";
import Hero from "../components/Body/Hero";
import Mwellness from "../components/Mwellness";
import Pwellness from "../components/Pwellness";

import Parallax from "../components/Parallax";

export default function Home() {
  return (
    <div className="h-[100vh] overflow-y-scroll scroll-smooth">
      <Header />
      <Hero />
      <Mwellness />
      <Parallax />
      <Pwellness />
      <Footer/>
    </div>
  );
}
