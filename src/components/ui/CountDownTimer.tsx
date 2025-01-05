"use client";
import React, { useState, useEffect } from "react";

const CountDownTimer = () => {
  const eventDate = new Date("2025-01-18T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          milliseconds: difference % 1000,
        });
      } else {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <div className="flex justify-center items-center gap-4">
      <div className="text-xs md:text-2xl flex flex-col md:flex-row justify-center items-center md:gap-2 gap-0">
        <span className="text-3xl font-bold">{timeLeft.days}</span>
        <p>Days</p>
      </div>
      <div className="text-xs md:text-2xl flex flex-col md:flex-row justify-center items-center md:gap-2 gap-0">
        <span className="text-3xl font-bold">{timeLeft.hours}</span>
        <p>Hours</p>
      </div>
      <div className="text-xs md:text-2xl flex flex-col md:flex-row justify-center items-center md:gap-2 gap-0">
        <span className="text-3xl font-bold">{timeLeft.minutes}</span>
        <p>Minutes</p>
      </div>
      <div className="text-xs md:text-2xl flex flex-col md:flex-row justify-center items-center md:gap-2 gap-0">
        <span className="text-3xl font-bold">{timeLeft.seconds}</span>
        <p>Seconds</p>
      </div>
      <div className="text-xs md:text-2xl flex flex-col md:flex-row justify-center items-center md:gap-2 gap-0">
        <span className="text-3xl font-bold">{timeLeft.milliseconds}</span>
        <p>Milliseconds</p>
      </div>
    </div>
  );
};

export default CountDownTimer;
