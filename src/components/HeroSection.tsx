import { CalendarFold, Trophy } from "lucide-react";
import { RandomizedTextEffect } from "./ui/text-randomized";
import CountDownTimer from "./ui/CountDownTimer";
import BlurFade from "./ui/blur-fade";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center space-y-6 bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat">
      <BlurFade delay={0.05} inView>
        <div className="text-center text-white px-2 py-1 rounded-full bg-clip-text text-transparent text-lg border border-white/50 flex justify-center items-center space-y-2 gap-2">
          <div className="blink" /> MU-ACM presents
        </div>
      </BlurFade>
      <BlurFade delay={0.1} inView>
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-center font-bold uppercase">
          <RandomizedTextEffect text="HACK Sangraam" />
        </h1>
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <p className="text-white/75 text-[0.7rem] md:text-lg text-center px-4">
          Hack Sangraam is an ONLINE coding competition <br /> where you&apos;ll
          get to compete with students all over India!
        </p>
      </BlurFade>
      <div className="flex justify-center items-center space-x-4 px-4">
        <BlurFade delay={0.3} inView>
          <div className="flex items-center space-x-2">
            <Trophy className="size-6 text-[#45BBD5]" />{" "}
            <p className="text-xs md:text-base">
              TOTAL AMOUNT OF FEE COLLECTED!
            </p>
          </div>
        </BlurFade>
        <BlurFade delay={0.35} inView>
          <div className="flex items-center space-x-2">
            <CalendarFold className="size-6 text-[#45BBD5]" />{" "}
            <p className="text-xs md:text-base">January 18, 2025</p>
          </div>
        </BlurFade>
      </div>
      <BlurFade delay={0.4} inView>
        <div className="group relative cursor-pointer p-2 w-44 border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
          <a target="_blank" href="https://forms.gle/8qgWchFobv6jLAGR6">
            <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
              Register Now!
            </span>
            <div className="flex gap-2 text-white bg-[#26a3ec] z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none ">
              <span>Rs. 50 / Head</span>
            </div>
          </a>
        </div>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <CountDownTimer />
      </BlurFade>
    </div>
  );
}
