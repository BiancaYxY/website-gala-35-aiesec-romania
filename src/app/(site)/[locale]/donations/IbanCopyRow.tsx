"use client";

import { useState } from "react";

export function IbanCopyRow({
  label,
  value,
  copiedLabel,
  copyLabel,
}: {
  label: string;
  value: string;
  copiedLabel: string;
  copyLabel: string;
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
    <div className="rounded-xl border border-subtle bg-black/20 p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">{label}</p>
      <div className="mt-2 flex items-center justify-between gap-2">
        <p className="truncate text-xs font-medium text-foreground">{value}</p>
        <button
          type="button"
          onClick={onCopy}
          className="shrink-0 rounded-full border border-subtle bg-card/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-foreground transition hover:bg-card"
          aria-label={`${copyLabel} ${label}`}
        >
          {copied ? copiedLabel : copyLabel}
        </button>
      </div>
    </div>
  );
}
