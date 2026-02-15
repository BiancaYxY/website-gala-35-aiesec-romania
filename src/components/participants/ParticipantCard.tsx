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
    <article className="rounded-2xl bg-card p-3 shadow-[0_10px_28px_rgba(0,0,0,0.28)] ring-1 ring-white/10">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-background/60">
        {showImage ? (
          <Image
            src={participant.photo_url as string}
            alt={participant.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-background text-3xl font-semibold text-gold/90">
            {initials}
          </div>
        )}
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold text-foreground">{participant.name}</h3>
        <span className="shrink-0 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-black">
          {participant.generation}
        </span>
      </div>
    </article>
  );
}
