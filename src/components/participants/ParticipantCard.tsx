"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Participant } from "@/lib/supabase/participants";

type ParticipantCardProps = {
  participant: Participant;
};

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p.charAt(0).toUpperCase()).join("") || "P";
}

function isValidImageSrc(value: string | null): value is string {
  if (!value) return false;
  const src = value.trim();
  if (!src) return false;
  return src.startsWith("/") || src.startsWith("http://") || src.startsWith("https://");
}

export function ParticipantCard({ participant }: ParticipantCardProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const initials = useMemo(() => initialsFromName(participant.name), [participant.name]);
  const imageSrc = isValidImageSrc(participant.photo_url) ? participant.photo_url : null;
  const displayImageSrc = !imgFailed ? imageSrc : null;
  const normalizedLinkedin = participant.linkedin?.trim();
  const linkedinNotProvided = !normalizedLinkedin || normalizedLinkedin.toLowerCase() === "not provided";
  const linkedinHref = normalizedLinkedin
    ? /^https?:\/\//i.test(normalizedLinkedin)
      ? normalizedLinkedin
      : `https://${normalizedLinkedin}`
    : null;

  return (
    <article className="h-fit self-start rounded-xl bg-card p-2 shadow-[0_6px_18px_rgba(0,0,0,0.24)] ring-1 ring-white/10 transition hover:ring-white/20">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="w-full text-left"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-background/60">
          {displayImageSrc ? (
            <Image
              src={displayImageSrc}
              alt={participant.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1400px) 25vw, 20vw"
              className="object-cover"
              onError={() => setImgFailed(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-background text-xl font-semibold text-gold/90 sm:text-2xl">
              {initials}
            </div>
          )}
        </div>

        <div className="mt-2 flex items-start justify-between gap-1.5">
          <h3 className="min-w-0 break-words text-sm font-semibold leading-tight text-foreground sm:text-[0.95rem]">
            {participant.name}
          </h3>
          <span className="shrink-0 rounded-full bg-gold px-2 py-0.5 text-[10px] font-semibold text-black sm:text-[11px]">
            {participant.generation}
          </span>
        </div>
      </button>

      {isOpen && (
        <div className="mt-3 rounded-lg border border-subtle bg-background/40 p-3 text-sm break-words">
          <p className="text-foreground break-words">
            <span className="font-semibold">LC:</span> {participant.lc || "-"}
          </p>
          <p className="mt-1 text-foreground break-words">
            <span className="font-semibold">Phone:</span>{" "}
            {participant.phone_number || "-"}
          </p>
          <p className="mt-1 text-foreground break-words">
            <span className="font-semibold">Email:</span>{" "}
            {participant.email || "-"}
          </p>
          <p className="mt-1 text-foreground break-words">
            <span className="font-semibold">LinkedIn:</span>{" "}
            {linkedinNotProvided ? (
              "Not Provided"
            ) : linkedinHref ? (
              <a className="break-all text-gold underline" href={linkedinHref} target="_blank" rel="noreferrer">
                Click here
              </a>
            ) : (
              "-"
            )}
          </p>
        </div>
      )}
    </article>
  );
}
