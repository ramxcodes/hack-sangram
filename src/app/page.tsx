import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import { RegisterSection } from "@/components/RegisterSection";
import Tempting from "@/components/Tempting";

export default function Home() {
  return (
    <div className="font-wotfard tracking-wide font-white">
      <Navbar />
      <HeroSection />
      <Marquee />
      <Tempting />
      <AboutSection />
      <RegisterSection />
      <Footer />
    </div>
  );
}
