import React from "react";
import Earth from "./ui/globe";
import BlurFade from "./ui/blur-fade";

function Tempting() {
  return (
    <>
      <div className="min-h-fit overflow-hidden py-20">
        <article className="max-w-[800px] mx-auto mt-12 p-5 text-center rounded-lg relative">
          <div className="relative z-10">
            <BlurFade delay={0.25} inView>
              <h1 className="text-7xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#06152e] bg-clip-text text-transparent leading-[100%] tracking-tighter">
                Compete with students all over India!
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <Earth />
            </BlurFade>
          </div>
        </article>
      </div>
    </>
  );
}

export default Tempting;
