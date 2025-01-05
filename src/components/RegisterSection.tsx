"use client";

import BlurFade from "./ui/blur-fade";
import { DynamicSquareBackground } from "./ui/dynamicsquare";
import { CodeContainer, StaticStep } from "./ui/staticstepper";

const dataSteps = [
  {
    title: "Step 1",
    code: "Register for Hack Sangraam by filling up your details in the form provided.",
  },
  {
    title: "Step 2",
    code: "Pay the participation fee of Rs. 50 to confirm your registration.",
  },
  {
    title: "Step 3",
    code: "Check your email for confirmation and event details.",
  },
  {
    title: "Step 4",
    code: "Participate in the online coding competition on January 18, 2025, and compete for exciting prizes!",
  },
];

export function RegisterSection() {
  return (
    <div
      id="register"
      className="flex flex-col justify-center items-center min-h-fit gap-6 pb-20 z-20"
    >
      <BlurFade delay={0.25} inView>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold bg-gradient-to-b from-[#edeffd] to-[#06152e] bg-clip-text text-transparent leading-[100%] tracking-tighter px-4">
          Register Now
        </h1>
      </BlurFade>
      <div className="w-full max-w-2xl p-4">
        {dataSteps.map((step, index) => (
          <BlurFade key={step.title} delay={0.3} inView>
            <StaticStep step={index + 1} title={step.title}>
              <BlurFade delay={0.35} inView>
                <CodeContainer>{step.code}</CodeContainer>
              </BlurFade>
            </StaticStep>
          </BlurFade>
        ))}
      </div>
      <BlurFade delay={0.45} inView>
        <DynamicSquareBackground
          buttonHref="https://forms.gle/8qgWchFobv6jLAGR6"
          buttonText="Register Now"
          description="Time is ticking, register now and win exciting prizes."
          tag="MU-ACM"
          title="Hack Sangraam"
        />
      </BlurFade>
    </div>
  );
}
