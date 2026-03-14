"use client";

import { track } from "@vercel/analytics";
import type { ReactNode } from "react";

type TrackedCtaLinkProps = {
  href: string;
  eventName: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

export function TrackedCtaLink({
  href,
  eventName,
  className,
  children,
  target,
  rel,
}: TrackedCtaLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={() => {
        track(eventName, { href });
      }}
    >
      {children}
    </a>
  );
}
