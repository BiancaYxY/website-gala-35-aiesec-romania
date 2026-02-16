"use client";

import Link from "next/link";
import Image from "next/image";
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
  const MENU_ANIMATION_MS = 240;
  const pathname = usePathname() || "/";
  const locale = useMemo(() => getLocaleFromPath(pathname), [pathname]);
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen || !menuMounted) return;
    const timer = window.setTimeout(() => setMenuMounted(false), MENU_ANIMATION_MS);
    return () => window.clearTimeout(timer);
  }, [menuOpen, menuMounted]);

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

  const openMenu = () => {
    setMenuMounted(true);
    window.requestAnimationFrame(() => setMenuOpen(true));
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-[1200] border-b border-subtle bg-black/20 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={href("")} className="inline-flex self-stretch items-center">
          <span className="relative h-full w-56 sm:w-72">
            <Image
              src="/rooted%20in%20romania.svg"
              alt="Rooted in Romania"
              fill
              className="object-contain object-left"
              priority
            />
          </span>
        </Link>

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

        <div className="flex items-center gap-2 md:hidden">
          <Link
            className="rounded-2xl border border-subtle bg-card px-2.5 py-2 text-xs text-foreground"
            href={locale === "ro" ? langHref("en") : langHref("ro")}
            aria-label={locale === "ro" ? "Switch language to English" : "Schimbă limba în română"}
          >
            {locale === "ro" ? "RO" : "EN"}
          </Link>

          <button
            onClick={openMenu}
            className="rounded-2xl border border-subtle px-3 py-2"
            aria-label="Open menu"
          >
            {locale === "ro" ? "Meniu" : "Menu"}
          </button>
        </div>
      </div>

      {menuMounted && (
        <div
          className={`fixed inset-0 z-[9999] isolate transition-opacity duration-200 ${
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/70 transition-opacity duration-200 ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
            aria-hidden="true"
          />

          <div
            className={`absolute inset-0 z-10 flex h-dvh flex-col overflow-hidden transition-all duration-200 ease-out sm:inset-y-0 sm:right-0 sm:left-auto sm:h-full sm:w-[85%] sm:max-w-sm sm:shadow-soft sm:ring-1 sm:ring-white/10 ${
              menuOpen ? "translate-y-0 opacity-100 sm:translate-x-0" : "translate-y-3 opacity-0 sm:translate-x-full sm:translate-y-0"
            }`}
            style={{
              backgroundImage:
                'linear-gradient(rgba(10, 12, 22, 0.65), rgba(10, 12, 22, 0.65)), url("/background%20photo.svg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-subtle bg-black/25 px-4 py-4 backdrop-blur-sm">
              <div className="text-sm font-semibold">
                Menu <span className="text-gold">Gala 35</span>
              </div>

              <button
                onClick={closeMenu}
                className="rounded-2xl border border-subtle px-3 py-2"
                aria-label="Close menu"
              >
                {locale === "ro" ? "Închide" : "Close"}
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-2 py-4">
              <div className="flex flex-col gap-1">
                {navItems.map((i) => (
                  <Link
                    key={i.path}
                    href={href(i.path)}
                    onClick={closeMenu}
                    className="rounded-2xl px-4 py-4 text-base font-medium text-foreground hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
