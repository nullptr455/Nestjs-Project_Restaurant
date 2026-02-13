"use client";
import React, { useState, useEffect } from "react";

const CountDown = () => {
  const targetDate = new Date("2/20/2026").getTime();

  const [timeLeft, setTimeLeft] = useState(() => {
    const difference = targetDate - Date.now();
    return difference > 0 ? difference : 0;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = targetDate - Date.now();
      setTimeLeft(difference > 0 ? difference : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft <= 0) {
    return (
      <span className="text-5xl font-bold text-yellow-300">Times up!</span>
    );
  }

  const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const h = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const m = Math.floor((timeLeft / (1000 * 60)) % 60);
  const s = Math.floor((timeLeft / 1000) % 60);

  return (
    <span className="font-bold text-5xl text-yellow-300">
      {d}d : {h}h : {m}m : {s}s
    </span>
  );
};

export default CountDown;
