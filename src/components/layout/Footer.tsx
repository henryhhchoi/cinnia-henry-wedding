"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-05-14T17:00:00+09:00");

function getCountdown() {
  const now = new Date();
  const diff = WEDDING_DATE.getTime() - now.getTime();
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export default function Footer() {
  const [countdown, setCountdown] = useState<ReturnType<typeof getCountdown>>(null);

  useEffect(() => {
    setCountdown(getCountdown());
    const id = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="py-12 px-6 text-center">
      <div className="w-16 h-px bg-sage-light mx-auto mb-8" />
      {countdown ? (
        <p className="font-serif italic text-sage text-sm tracking-wide">
          {countdown.days} days, {countdown.hours}h {countdown.minutes}m{" "}
          {countdown.seconds}s until we say &ldquo;I do&rdquo;
        </p>
      ) : (
        <p className="font-serif italic text-sage text-sm tracking-wide">
          We&rsquo;re married! 🎉
        </p>
      )}
      <p className="font-serif text-sage-light text-xs mt-3 tracking-widest uppercase">
        Cinnia &amp; Henry · May 14, 2026 · Jeju, South Korea
      </p>
    </footer>
  );
}
