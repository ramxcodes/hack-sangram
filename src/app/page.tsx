import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Tempting from "@/components/Tempting";

export default function Home() {
  return (
    <div className="font-mono">
      <Navbar />
      <HeroSection />
      <Marquee />
      <Tempting />
      <AboutSection />
    </div>
  );
}
