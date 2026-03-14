"use client";

import { useEffect } from "react";

export function RedirectToExternal({ href }: { href: string }) {
  useEffect(() => {
    window.location.replace(href);
  }, [href]);

  return null;
}
