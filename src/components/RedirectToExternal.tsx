"use client";

import { useEffect } from "react";
import Link from "next/link";

export function RedirectToExternal({ href }: { href: string }) {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      window.location.replace(href);
    }, 900);

    return () => window.clearTimeout(timeoutId);
  }, [href]);

  return (
    <main className="mx-auto flex min-h-[50vh] max-w-3xl items-center justify-center px-4 py-16">
      <div className="w-full rounded-3xl bg-card px-6 py-10 text-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
        <p className="text-lg font-semibold text-foreground">Redirecting...</p>
        <p className="mt-3 text-sm text-white/80">
          If nothing happens, continue manually below.
        </p>
        <Link
          href={href}
          className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 font-semibold text-black transition hover:-translate-y-0.5"
        >
          Continue
        </Link>
      </div>
    </main>
  );
}
