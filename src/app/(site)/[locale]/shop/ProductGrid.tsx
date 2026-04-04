"use client";

import Image from "next/image";
import { useState } from "react";

export type Product = {
  src: string;
  nameEn: string;
  nameRo: string;
  price: string;
};

function parsePrice(price: string): number {
  const match = price.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

export function ProductGrid({ products, isRo }: { products: Product[]; isRo: boolean }) {
  const [selected, setSelected] = useState<Product | null>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  function setQty(src: string, delta: number) {
    setQuantities((prev) => {
      const next = (prev[src] ?? 0) + delta;
      if (next <= 0) {
        const { [src]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [src]: next };
    });
  }

  const cartItems = products.filter((p) => (quantities[p.src] ?? 0) > 0);
  const total = cartItems.reduce(
    (sum, p) => sum + parsePrice(p.price) * (quantities[p.src] ?? 0),
    0,
  );

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          const qty = quantities[product.src] ?? 0;
          return (
            <div
              key={product.src}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition duration-200 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
            >
              <button
                onClick={() => setSelected(product)}
                className="flex h-48 w-full items-center justify-center bg-white/5 p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold"
              >
                <Image
                  src={product.src}
                  alt={isRo ? product.nameRo : product.nameEn}
                  width={300}
                  height={300}
                  className="h-full w-full object-contain transition duration-200 hover:scale-105"
                />
              </button>
              <div className="flex flex-1 flex-col items-center gap-2 p-3 text-center">
                <p className="text-sm font-semibold leading-snug text-foreground">
                  {isRo ? product.nameRo : product.nameEn}
                </p>
                <span className="text-sm font-bold text-gold">{product.price}</span>
                <div className="mt-auto flex items-center gap-2">
                  {qty === 0 ? (
                    <button
                      onClick={() => setQty(product.src, 1)}
                      className="rounded-full bg-gold/20 px-4 py-1 text-xs font-bold text-gold transition hover:bg-gold/40"
                    >
                      {isRo ? "+ Adaugă" : "+ Add"}
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => setQty(product.src, -1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white transition hover:bg-white/20"
                        aria-label="Decrease"
                      >
                        −
                      </button>
                      <span className="w-5 text-center text-sm font-bold text-foreground">
                        {qty}
                      </span>
                      <button
                        onClick={() => setQty(product.src, 1)}
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/30 text-sm font-bold text-gold transition hover:bg-gold/50"
                        aria-label="Increase"
                      >
                        +
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 rounded-3xl border border-gold/30 bg-card p-5 shadow-[0_8px_32px_rgba(226,192,49,0.1)] md:p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">
            {isRo ? "Rezumat comandă" : "Order summary"}
          </p>
          <ul className="space-y-2">
            {cartItems.map((p) => {
              const qty = quantities[p.src] ?? 0;
              const subtotal = parsePrice(p.price) * qty;
              return (
                <li key={p.src} className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-white/80">
                    {isRo ? p.nameRo : p.nameEn}
                    <span className="ml-1 text-white/40">× {qty}</span>
                  </span>
                  <span className="font-semibold text-foreground">
                    {subtotal % 1 === 0 ? subtotal : subtotal.toFixed(2)} RON
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="flex items-center justify-between">
            <span className="font-bold uppercase tracking-wide text-foreground">
              {isRo ? "Total estimat" : "Estimated total"}
            </span>
            <span className="text-2xl font-extrabold text-gold">
              {total % 1 === 0 ? total : total.toFixed(2)} RON
            </span>
          </div>
          <p className="mt-3 text-xs text-white/40">
            {isRo
              ? "* Acesta este un calcul informativ. Comanda se plasează prin formularul de mai jos."
              : "* This is an informative estimate. Orders are placed through the form below."}
          </p>
        </div>
      )}

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-card shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition hover:bg-white/20 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="flex h-72 items-center justify-center bg-white/5 p-6">
              <Image
                src={selected.src}
                alt={isRo ? selected.nameRo : selected.nameEn}
                width={500}
                height={500}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center gap-2 p-5 text-center">
              <p className="text-lg font-bold text-foreground">
                {isRo ? selected.nameRo : selected.nameEn}
              </p>
              <span className="text-xl font-extrabold text-gold">{selected.price}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
