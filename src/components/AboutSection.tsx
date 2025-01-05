import Auto from "./ui/Auto";
import BlurFade from "./ui/blur-fade";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="text-center min-h-screen flex flex-col justify-center items-center space-y-6"
    >
      <BlurFade delay={0.25} inView>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#06152e] bg-clip-text text-transparent leading-[100%] tracking-tighter px-4">
          Get Ready for Hack Sangraam
          <br />
          Everything You Need to Know!
        </h1>
      </BlurFade>
      <div className="px-4 pb-10">
        <BlurFade delay={0.35} inView>
          <Auto />
        </BlurFade>
      </div>
    </div>
  );
}
