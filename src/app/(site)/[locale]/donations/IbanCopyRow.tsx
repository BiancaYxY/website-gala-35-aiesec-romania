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
  variant?:
    | "evermore"
    | "unleashed"
    | "dauntless"
    | "frostbite"
    | "hustle"
    | "pressure"
    | "darts"
    | "rooftop"
    | "architects"
    | "vlastar"
    | "strike"
    | "frequency"
    | "mc-hora";
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
                  : variant === "architects"
                    ? "border-[#e58842]/55 bg-[#4f2410] text-[#fff0d2] hover:border-[#f3a564] hover:bg-[#693015]"
                    : variant === "vlastar"
                      ? "border-[#6fcf49]/55 bg-[#124d13] text-[#e8ffd7] hover:border-[#90e665] hover:bg-[#1a6619]"
                      : variant === "strike"
                        ? "border-[#f0d14f]/55 bg-[#13263c] text-[#eef7ff] hover:border-[#ffe475] hover:bg-[#1b3a59]"
                        : variant === "frequency"
                          ? "border-[#dce1e3]/38 bg-[#353a3b] text-white hover:border-white/70 hover:bg-[#454b4c]"
                          : variant === "mc-hora"
                            ? "border-[#e2c031]/60 bg-[#3a0a12] text-[#f7e59a] hover:border-[#f5d84a] hover:bg-[#510f1c]"
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
