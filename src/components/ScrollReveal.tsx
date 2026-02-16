"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = [
  "main section",
  "main article",
  "main h1",
  "main h2",
  "main h3",
  "main p",
  "main ul",
  "main ol",
  "main img",
  "main iframe",
  "main form",
].join(", ");

function getRevealElements(root: ParentNode) {
  return Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
    (el) => !el.closest("[data-sr-skip='true']"),
  );
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("sr-in");
          observer.unobserve(el);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    const bind = (root: ParentNode) => {
      const elements = getRevealElements(root);
      elements.forEach((el, idx) => {
        if (el.dataset.srBound === "1") return;
        el.dataset.srBound = "1";
        el.classList.add("sr-init");
        el.style.transitionDelay = `${(idx % 6) * 45}ms`;
        observer.observe(el);
      });
    };

    const main = document.querySelector("main");
    if (main) bind(main);

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType !== Node.ELEMENT_NODE) return;
          bind(node as Element);
        });
      });
    });

    if (main) {
      mo.observe(main, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}

