"use client";

import { useState, useEffect } from "react";

export default function LiveClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Only run on client to avoid hydration mismatch
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      });
      // Try to get a basic timezone offset representation (e.g. UTC +08:00)
      const offset = -now.getTimezoneOffset();
      const sign = offset >= 0 ? "+" : "-";
      const pad = (num: number) => String(Math.abs(num)).padStart(2, "0");
      const offsetString = `UTC ${sign}${pad(Math.floor(offset / 60))}:${pad(offset % 60)}`;
      
      setTime(`${timeString} (${offsetString})`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return <span className="text-gray-400 font-mono text-sm">--:-- (UTC --:--)</span>;
  }

  return <span className="text-gray-400 font-mono text-sm">{time}</span>;
}
