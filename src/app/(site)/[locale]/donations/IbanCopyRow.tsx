"use client";

import { useState } from "react";

export function IbanCopyRow({
  label,
  value,
  copiedLabel,
  copyLabel,
  variant,
}: {
  label: string;
  value: string;
  copiedLabel: string;
  copyLabel: string;
  variant?: "evermore" | "unleashed" | "dauntless" | "frostbite" | "hustle" | "pressure" | "darts" | "rooftop";
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rounded-xl border border-subtle bg-[rgb(var(--bg)/0.42)] p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">{label}</p>
      <div className="mt-2 flex items-center justify-between gap-2">
        <p className="truncate text-xs font-medium text-foreground">{value}</p>
        <button
          type="button"
          onClick={onCopy}
          className={`shrink-0 rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition ${
            variant === "evermore"
              ? "border-[#d6af7b]/55 bg-[#3b2618] text-[#f7dfbc] hover:border-[#efc993] hover:bg-[#523421]"
              : variant === "unleashed"
                ? "border-[#5caef8]/55 bg-[#123459] text-[#d8edff] hover:border-[#8ec8ff] hover:bg-[#1a4777]"
                : variant === "dauntless"
                  ? "border-[#f29a44]/55 bg-[#4a200d] text-[#ffe0c1] hover:border-[#ffb36a] hover:bg-[#633015]"
                : variant === "frostbite"
                  ? "border-[#8fd7ff]/55 bg-[#123658] text-[#e1f4ff] hover:border-[#b4e7ff] hover:bg-[#1a4a78]"
                : variant === "hustle"
                  ? "border-[#ff79a7]/55 bg-[#5e1535] text-[#ffe0ef] hover:border-[#ff9fc2] hover:bg-[#7a1b45]"
                : variant === "pressure"
                  ? "border-[#7fe7a6]/55 bg-[#14542a] text-[#e2ffec] hover:border-[#a5f0c2] hover:bg-[#1b6b35]"
                : variant === "darts"
                  ? "border-[#ef6676]/55 bg-[#3a1019] text-[#ffe9ed] hover:border-[#ff96a3] hover:bg-[#531523]"
                : variant === "rooftop"
                  ? "border-[#e5c38f]/55 bg-[#4a341f] text-[#ffefd3] hover:border-[#f2d09c] hover:bg-[#62472d]"
                : "border-subtle bg-[rgb(var(--navy)/0.82)] text-foreground hover:border-[rgb(var(--gold)/0.6)] hover:bg-[rgb(var(--navy)/0.95)]"
          }`}
          aria-label={`${copyLabel} ${label}`}
        >
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>
    </div>
  );
}
