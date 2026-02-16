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

export function ParticipantCard({ participant }: ParticipantCardProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const initials = useMemo(() => initialsFromName(participant.name), [participant.name]);
  const showImage = Boolean(participant.photo_url) && !imgFailed;

  return (
    <article className="rounded-xl bg-card p-2 shadow-[0_6px_18px_rgba(0,0,0,0.24)] ring-1 ring-white/10">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-background/60">
        {showImage ? (
          <Image
            src={participant.photo_url as string}
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
        <h3 className="text-sm font-semibold leading-tight text-foreground sm:text-[0.95rem]">{participant.name}</h3>
        <span className="shrink-0 rounded-full bg-gold px-2 py-0.5 text-[10px] font-semibold text-black sm:text-[11px]">
          {participant.generation}
        </span>
      </div>
    </article>
  );
}
