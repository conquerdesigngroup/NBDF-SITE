import Nav from "./_components/Nav";
import Hero from "./_components/Hero";
import StatBar from "./_components/StatBar";
import Mission from "./_components/Mission";
import ParallaxBanner from "./_components/ParallaxBanner";
import HelpCards from "./_components/HelpCards";
import Events from "./_components/Events";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <StatBar />
      <Mission />
      <ParallaxBanner />
      <HelpCards />
      <Events />
      <Contact />
      <Footer />
    </>
  );
}
