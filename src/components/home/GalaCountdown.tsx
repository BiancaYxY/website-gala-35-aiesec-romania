"use client";

import { useEffect, useMemo, useState } from "react";

type Locale = "ro" | "en";

function getBucharestDateParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Bucharest",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const year = Number(parts.find((p) => p.type === "year")?.value ?? "0");
  const month = Number(parts.find((p) => p.type === "month")?.value ?? "0");
  const day = Number(parts.find((p) => p.type === "day")?.value ?? "0");

  return { year, month, day };
}

function getNextGalaTarget() {
  const now = new Date();
  const { year, month, day } = getBucharestDateParts(now);
  const galaYear = month > 4 || (month === 4 && day > 24) ? year + 1 : year;

  // April in Bucharest is DST (+03:00).
  return new Date(`${galaYear}-04-24T00:00:00+03:00`);
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function GalaCountdown({ locale }: { locale: Locale }) {
  const target = useMemo(() => getNextGalaTarget(), []);
  const [nowMs, setNowMs] = useState<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNowMs(Date.now());
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const safeNowMs = nowMs ?? target.getTime();
  const remaining = Math.max(0, target.getTime() - safeNowMs);
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const labels =
    locale === "ro"
      ? {
          title: "Timpul trece!",
          days: "Zile",
          hours: "Ore",
          minutes: "Minute",
          seconds: "Secunde",
        }
      : {
          title: "The clock is ticking!",
          days: "Days",
          hours: "Hours",
          minutes: "Minutes",
          seconds: "Seconds",
        };

  const blocks = [
    { value: String(days), label: labels.days },
    { value: pad(hours), label: labels.hours },
    { value: pad(minutes), label: labels.minutes },
    { value: pad(seconds), label: labels.seconds },
  ];

  return (
    <section className="mx-auto mt-4 w-full max-w-3xl px-1 py-2">
      <h2 className="mb-4 text-center text-base font-semibold text-gold sm:text-lg">{labels.title}</h2>

      <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
        {blocks.map((block) => (
          <div key={block.label} className="text-center">
            <div className="rounded-xl bg-gold px-2 py-2.5 shadow-[0_10px_24px_rgba(226,192,49,0.35)] sm:px-3 sm:py-3">
              <p className="text-2xl font-extrabold tracking-wider text-black sm:text-4xl">{block.value}</p>
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gold">{block.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
