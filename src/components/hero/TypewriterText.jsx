"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText() {
  return (
    <span className="text-yellow-400 font-bold border-b-2 border-yellow-400/20">
      <Typewriter
        words={[
          "Flights Booking",
          "Visa Services",
          "Holiday Packages",
          "Umrah Packages",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </span>
  );
}