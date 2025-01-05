"use client";
import { cn } from "@/utils/utils";
import { useEffect, useState } from "react";

//TODO : Improve mobile version to display the image down the corresponding text instead of at the full bottom
const data = [
  {
    title: "Register for Hack Sangraam",
    content:
      "Join the ultimate online coding competition, Hack Sangraam, and compete with students across India for cash prizes and certificates.",
    srcImage: "/about/1.png",
  },
  {
    title: "Win Exciting Prizes",
    content:
      "The prize pool includes the total amount of fees collected. Secure your spot and stand a chance to win big!",
    srcImage: "/about/2.png",
  },
  {
    title: "Event Date and Details",
    content:
      "Hack Sangraam is scheduled for January 18, 2025. It will be conducted online and will run from noon to midnight.",
    srcImage: "/about/3.png",
  },
  {
    title: "Participation Fee and Benefits",
    content:
      "Participate with a minimal fee of Rs. 50 per head. All participants receive certificates of participation and winners get certificates of excellence.",
    srcImage: "/about/4.png",
  },
  {
    title: "Contact and Social Media",
    content:
      "For queries, contact Atharv Untwale at 8269481880. Stay updated by following our Instagram and LinkedIn pages.",
    srcImage: "/about/5.png",
  },
];

export function Auto() {
  const [featureOpen, setFeatureOpen] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen((prev) => (prev + 1) % data.length);
      setTimer(0);
    }
  }, [timer]);

  return (
    <div className="container">
      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-6 ">
          {data.map((item, index) => (
            <button
              className="w-full"
              key={item.title}
              onClick={() => {
                setFeatureOpen(index);
                setTimer(0);
              }}
              type="button"
            >
              <TextComponent
                content={item.content}
                isOpen={featureOpen === index}
                loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                number={index + 1}
                title={item.title}
              />
            </button>
          ))}
        </div>
        <div className="h-full">
          <div
            className={cn(
              "relative h-96 w-full overflow-hidden rounded-lg md:h-[500px]"
            )}
          >
            {data.map((item, index) => (
              <img
                alt={item.title}
                className={cn(
                  "absolute h-[500px] w-full transform-gpu rounded-lg object-cover transition-all duration-300",
                  featureOpen === index ? "scale-100" : "scale-70",
                  featureOpen > index ? "translate-y-full" : ""
                )}
                key={item.title}
                src={item.srcImage}
                style={{ zIndex: data.length - index }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auto;
function TextComponent({
  number,
  title,
  content,
  isOpen,
  loadingWidthPercent,
}: Readonly<{
  number: number;
  title: string;
  content: string;
  isOpen: boolean;
  loadingWidthPercent?: number;
}>) {
  return (
    <div
      className={cn(
        "transform-gpu rounded-lg border transition-all",
        isOpen
          ? "border-neutral-500/10 bg-gradient-to-b from-neutral-200/15 to-neutral-200/5 dark:border-neutral-500/15 dark:from-neutral-600/15 dark:to-neutral-600/5 dark:shadow-[2px_4px_25px_0px_rgba(248,248,248,0.06)_inset] "
          : "scale-90 border-transparent opacity-50 saturate-0"
      )}
    >
      <div className="flex w-full items-center gap-4 p-4">
        <p
          className={cn(
            "inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-neutral-500/20 text-neutral-600"
          )}
        >
          {number}
        </p>
        <h2
          className={cn(
            "text-left font-medium text-neutral-800 text-xl dark:text-neutral-200"
          )}
        >
          {title}
        </h2>
      </div>
      <div
        className={cn(
          "w-full transform-gpu overflow-hidden text-left text-neutral-600 transition-all duration-500 dark:text-neutral-400",
          isOpen ? " max-h-64" : "max-h-0"
        )}
      >
        <p className="p-4 text-lg">{content}</p>
        <div className="w-full px-4 pb-4">
          <div className="relative h-1 w-full overflow-hidden rounded-full">
            <div
              className={cn("absolute top-0 left-0 h-1 bg-neutral-500")}
              style={{ width: `${loadingWidthPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
