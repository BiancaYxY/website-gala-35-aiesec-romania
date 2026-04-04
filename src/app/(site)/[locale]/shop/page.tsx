import { ProductGrid, type Product } from "./ProductGrid";

const products: Product[] = [
  {
    src: "/Shop%20AIESEC%20Romania%20sticker%20pack.png",
    nameEn: "AIESEC Romania Sticker Pack",
    nameRo: "Pachet stickere AIESEC Romania",
    price: "12 RON",
  },
  {
    src: "/Shop%20Bracelet%20Once%20%26%20Always.png",
    nameEn: "Bracelet Once & Always",
    nameRo: "Brățară Once & Always",
    price: "6 RON",
  },
  {
    src: "/Shop%20CC%20Dor%20Bracelet.png",
    nameEn: "CC Dor Bracelet",
    nameRo: "Brățară CC Dor",
    price: "6 RON",
  },
  {
    src: "/Shop%20Funny%20sticker%20pack.png",
    nameEn: "Funny Sticker Pack",
    nameRo: "Pachet stickere funny",
    price: "12 RON",
  },
  {
    src: "/Shop%20Gala%2035%20Bracelet.png",
    nameEn: "Gala 35 Bracelet",
    nameRo: "Brățară Gala 35",
    price: "6 RON",
  },
  {
    src: "/Shop%20Gala%2035%20PEN.png",
    nameEn: "Gala 35 Pen",
    nameRo: "Pix Gala 35",
    price: "15 RON",
  },
  {
    src: "/Shop%20Gala%2035%20sticker%20pack.png",
    nameEn: "Gala 35 Sticker Pack",
    nameRo: "Pachet stickere Gala 35",
    price: "12 RON",
  },
  {
    src: "/Shop%20History%20book.png",
    nameEn: "History Book",
    nameRo: "History Book",
    price: "80 RON",
  },
  {
    src: "/Shop%20Pen%20proud%20leader.png",
    nameEn: "Pen Proud Leader",
    nameRo: "Pix Proud Leader",
    price: "15 RON",
  },
  {
    src: "/Shop%20Postcard.png",
    nameEn: "Postcard",
    nameRo: "Carte poștală",
    price: "10 RON",
  },
  {
    src: "/Shop%20Romania%20Everywhere%20Hoodie.png",
    nameEn: "Romania Everywhere Hoodie",
    nameRo: "Hanorac Romania Everywhere",
    price: "150 RON",
  },
  {
    src: "/Shop%20T-shirt%20Once%20an%20%40er.png",
    nameEn: "T-shirt Once an AIESECer",
    nameRo: "Tricou Once an AIESECer",
    price: "85 RON",
  },
  {
    src: "/Shop%20T-shirt%20proud%20alumni.png",
    nameEn: "T-shirt Proud Alumni",
    nameRo: "Tricou Proud Alumni",
    price: "85 RON",
  },
  {
    src: "/Shop%20T-shirt%20Romania%20Everywhere.png",
    nameEn: "T-shirt Romania Everywhere",
    nameRo: "Tricou Romania Everywhere",
    price: "85 RON",
  },
];

export default async function ShopPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRo = locale === "ro";

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          {isRo ? "Shop" : "Shop"}
        </h1>
        <p className="mt-3 text-base text-white/70 md:text-lg">
          {isRo
            ? "Descoperă produsele oficiale Gala 35 AIESEC România."
            : "Discover the official Gala 35 AIESEC Romania merchandise."}
        </p>
      </div>

      <div className="mb-8 flex items-start gap-3 rounded-2xl border border-blue-400/30 bg-blue-500/10 px-5 py-4 text-sm text-blue-200">
        <span className="mt-0.5 text-lg leading-none">ℹ️</span>
        <p>
          {isRo
            ? "Aceasta este o pagină de prezentare. Folosiți calculatorul de mai jos pentru a estima prețul, apoi apăsați butonul de comandă pentru a completa formularul."
            : "This is a preview page. Use the calculator below to estimate your total, then click the order button to fill in the form."}
        </p>
      </div>

      <ProductGrid products={products} isRo={isRo} />

      <div className="mt-12 flex justify-center">
        <a
          href="https://tally.so/r/yPDXPp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-w-[16rem] items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-extrabold uppercase tracking-[0.08em] text-black shadow-[0_20px_48px_rgba(226,192,49,0.45)] ring-1 ring-white/40 transition duration-200 hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(226,192,49,0.55)] md:min-w-[18rem] md:text-lg"
        >
          {isRo ? "Comandă acum" : "Order now"}
        </a>
      </div>
    </main>
  );
}
