"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Locale = "ro" | "en";

function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/en") ? "en" : "ro";
}

function switchLocaleInPath(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${nextLocale}`;
  parts[0] = nextLocale;
  return "/" + parts.join("/");
}

export function Header({
  labels,
}: {
  labels: {
    home: string;
    agenda: string;
    participants: string;
    donations: string;
    shop: string;
    faq: string;
  };
}) {
  const pathname = usePathname() || "/";
  const locale = useMemo(() => getLocaleFromPath(pathname), [pathname]);
  const [open, setOpen] = useState(false);

  // Lock scroll when menu open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const href = (path: string) => `/${locale}${path}`;
  const langHref = (next: Locale) => switchLocaleInPath(pathname, next);

  const navItems = [
    { label: labels.home, path: "" },
    { label: labels.agenda, path: "/agenda" },
    { label: labels.participants, path: "/participants" },
    { label: labels.donations, path: "/donations" },
    { label: labels.faq, path: "/faq" },
    { label: labels.shop, path: "/shop" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b border-subtle bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href={href("")} className="text-sm font-semibold">
          Gala <span className="text-gold">35</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((i) => (
            <Link
              key={i.path}
              href={href(i.path)}
              className="text-sm text-muted hover:text-foreground"
            >
              {i.label}
            </Link>
          ))}

          <div className="flex items-center gap-2">
            <Link
              className={`rounded-2xl border border-subtle px-3 py-2 text-xs ${
                locale === "ro" ? "bg-card" : "text-muted"
              }`}
              href={langHref("ro")}
            >
              RO
            </Link>
            <Link
              className={`rounded-2xl border border-subtle px-3 py-2 text-xs ${
                locale === "en" ? "bg-card" : "text-muted"
              }`}
              href={langHref("en")}
            >
              EN
            </Link>
          </div>
        </nav>

        {/* Mobile buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            className="rounded-2xl border border-subtle px-3 py-2 text-xs"
            href={locale === "ro" ? langHref("en") : langHref("ro")}
          >
            {locale === "ro" ? "EN" : "RO"}
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="rounded-2xl border border-subtle px-3 py-2"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-[9999] isolate">
          {/* Overlay */}
          <div
            className="absolute inset-0 z-0 bg-black/95"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 flex z-10 h-full w-full flex-col bg-background shadow-soft ring-1 ring-white/10 sm:w-[85%] sm:max-w-sm">
            {/* Sticky header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-subtle bg-background px-4 py-4">
              <div className="text-sm font-semibold">
                Menu <span className="text-gold">Gala 35</span>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-subtle px-3 py-2"
              >
                ✕
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-1 px-2 py-4">
              {navItems.map((i) => (
                <Link
                  key={i.path}
                  href={href(i.path)}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-4 text-base font-medium hover:bg-card"
                >
                  {i.label}
                </Link>
              ))}
            </nav>

            {/* Footer */}
            <div className="mt-auto border-t border-subtle px-4 py-4 text-xs text-muted">
              Mobile-first: butoane mari, ușor de apăsat.
            </div>
          </div>
        </div>
      )}
    </header>
  );
}