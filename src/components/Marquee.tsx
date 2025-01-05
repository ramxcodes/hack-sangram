import BlurFade from "./ui/blur-fade";
import ScrollBaseAnimation from "./ui/text-marquee";

function Marquee() {
  return (
    <>
      <BlurFade delay={0.25} inView>
        <div className="sm:h-[150px] md:h-[350px] lg:h-[500px] grid place-content-center">
          <ScrollBaseAnimation
            delay={500}
            baseVelocity={-3}
            className="font-bold tracking-[-0.07em] leading-[110%] bg-gradient-to-b from-[#edeffd] to-[#06152e] bg-clip-text text-transparent"
          >
            Hack Sangraam 2025!
          </ScrollBaseAnimation>

          <ScrollBaseAnimation
            delay={500}
            baseVelocity={3}
            className="font-bold tracking-[-0.07em] leading-[110%] bg-gradient-to-b from-[#edeffd] to-[#06152e] bg-clip-text text-transparent"
          >
            Join the Challenge Now
          </ScrollBaseAnimation>
        </div>
      </BlurFade>
    </>
  );
}

export default Marquee;
