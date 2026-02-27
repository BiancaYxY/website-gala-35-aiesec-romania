"use client";

import Image from "next/image";
import { useState } from "react";

const SHERATON_IMAGES = [
  "/sheraton-outside.webp",
  "/sheraton3.jpg",
  "/sheraton1.jpg",
  "/sheraton2.jpg",
  "/sheraton5.avif",
  "/sheraton-kingbed.avif",
  "/sheraton-twinbed.jpg",
];
const DEFAULT_IMAGE = "/sheraton-outside.webp";

type SheratonCarouselProps = {
  venueLabel: string;
  venueName: string;
  addressLabel: string;
  addressText: string;
  addressHref: string;
};

export function SheratonCarousel({
  venueLabel,
  venueName,
  addressLabel,
  addressText,
  addressHref,
}: SheratonCarouselProps) {
  const [index, setIndex] = useState(() => {
    const defaultIndex = SHERATON_IMAGES.indexOf(DEFAULT_IMAGE);
    return defaultIndex >= 0 ? defaultIndex : 0;
  });

  const prev = () =>
    setIndex((current) => (current - 1 + SHERATON_IMAGES.length) % SHERATON_IMAGES.length);
  const next = () => setIndex((current) => (current + 1) % SHERATON_IMAGES.length);

  return (
    <div className="mt-6">
      <div className="mb-5 text-center text-white">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/65">{venueLabel}</p>
        <p className="mt-1 text-lg font-semibold text-white sm:text-xl">{venueName}</p>
        <div className="mx-auto my-3 h-px w-20 bg-gradient-to-r from-transparent via-white/45 to-transparent" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/65">{addressLabel}</p>
        <a
          href={addressHref}
          target="_blank"
          rel="noreferrer"
          className="mt-1 block text-sm leading-relaxed text-white/90 underline decoration-white/40 underline-offset-4 transition hover:text-white hover:decoration-white sm:text-base"
        >
          {addressText}
        </a>
      </div>
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/20">
        <div className="relative aspect-[16/9] w-full">
          <div
            className="flex h-full w-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SHERATON_IMAGES.map((src, i) => (
              <div key={src} className="relative h-full w-full shrink-0">
                <Image
                  src={src}
                  alt={`Sheraton ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-black/55 px-3 py-1.5 text-lg text-white transition hover:bg-black/75"
        >
          &lt;
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-black/55 px-3 py-1.5 text-lg text-white transition hover:bg-black/75"
        >
          &gt;
        </button>
      </div>

      <div className="mt-3 flex justify-center gap-1.5">
        {SHERATON_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/35 hover:bg-white/55"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
