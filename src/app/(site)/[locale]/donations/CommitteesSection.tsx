"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { IbanCopyRow } from "./IbanCopyRow";

type Committee = {
  name: string;
  short?: string;
  lcStatement?: string;
  ibanEuro?: string;
  ibanRon?: string;
  details?: string[];
  logoSrc?: string;
  cardVariant?: "evermore" | "unleashed" | "dauntless" | "frostbite" | "hustle" | "pressure" | "darts" | "rooftop";
};

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

export function CommitteesSection({
  isRo,
  committees,
}: {
  isRo: boolean;
  committees: Committee[];
}) {
  const [search, setSearch] = useState("");
  const copyLabel = isRo ? "Copiază" : "Copy";
  const copiedLabel = isRo ? "Copiat" : "Copied";
  const ibanEuroLabel = "IBAN EURO";
  const ibanRonLabel = "IBAN RON";

  const filteredCommittees = useMemo(() => {
    const normalizedSearch = normalizeText(search);
    if (!normalizedSearch) return committees;
    return committees.filter((committee) =>
      normalizeText(committee.name).includes(normalizedSearch),
    );
  }, [search, committees]);

  return (
    <section
      className="mt-0 rounded-3xl border border-subtle bg-gradient-to-b from-[rgb(var(--navy)/0.45)] to-[rgb(var(--bg)/0.88)] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.24)] md:mt-0 md:p-6"
      data-sr-skip="true"
    >
      <h2 className="text-xl font-semibold text-foreground md:text-3xl">
        {isRo ? "Comitete locale AIESEC în România" : "AIESEC local committees in Romania"}
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-muted md:text-base">
        {isRo
          ? "Placeholder cards pentru logo + descriere scurtă. Fiecare card poate fi înlocuit ulterior cu identitatea vizuală și textul final."
          : "Placeholder cards for logo + short description. Each card can be replaced later with final visual identity and text."}
      </p>

      <div className="mt-5">
        <label
          htmlFor="committee-search"
          className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted"
        >
          {isRo ? "Caută comitet local" : "Search local committee"}
        </label>
        <input
          id="committee-search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={isRo ? "Ex: București" : "Ex: Bucharest"}
          className="w-full rounded-2xl border border-subtle bg-[rgb(var(--card)/0.72)] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/80 focus:border-[rgb(var(--gold)/0.65)] focus:ring-2 focus:ring-[rgb(var(--gold)/0.24)]"
        />
      </div>

      {filteredCommittees.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-subtle bg-[rgb(var(--card)/0.55)] px-4 py-8 text-center text-sm text-muted">
          {isRo ? "Nu am găsit niciun comitet pentru acest termen." : "No committee found for this search."}
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCommittees.map((committee) => {
            const isEvermore = committee.cardVariant === "evermore";
            const isUnleashed = committee.cardVariant === "unleashed";
            const isDauntless = committee.cardVariant === "dauntless";
            const isFrostbite = committee.cardVariant === "frostbite";
            const isHustle = committee.cardVariant === "hustle";
            const isPressure = committee.cardVariant === "pressure";
            const isDarts = committee.cardVariant === "darts";
            const isRooftop = committee.cardVariant === "rooftop";
            const formattedStatement = isDauntless
              ? committee.lcStatement
              : committee.lcStatement?.replace(/\s*,?\s*(#\S+)/g, "\n\n$1");

            return (
              <article
                key={committee.name}
                className={`rounded-2xl border p-5 shadow-[0_10px_24px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 ${
                  isEvermore
                    ? "border-[#c59a62]/50 bg-gradient-to-br from-[#2b1a0f]/95 via-[#3c2617]/92 to-[#1a120b]/95 hover:bg-gradient-to-br hover:from-[#3a2415] hover:via-[#4a2f1d] hover:to-[#21150d]"
                    : isUnleashed
                      ? "border-[#51a8ff]/50 bg-gradient-to-br from-[#0a1f35]/95 via-[#102a4a]/92 to-[#081729]/95 hover:bg-gradient-to-br hover:from-[#123058] hover:via-[#183b66] hover:to-[#0b213d]"
                      : isDauntless
                        ? "border-[#f08c2f]/50 bg-gradient-to-br from-[#341608]/95 via-[#4b1f0c]/92 to-[#251006]/95 hover:bg-gradient-to-br hover:from-[#4a1f0b] hover:via-[#62280f] hover:to-[#331508]"
                        : isFrostbite
                          ? "border-[#8fd7ff]/50 bg-gradient-to-br from-[#0b2238]/95 via-[#12324e]/92 to-[#0a1f32]/95 hover:bg-gradient-to-br hover:from-[#14324e] hover:via-[#1a4368] hover:to-[#102b44]"
                          : isHustle
                            ? "border-[#ff5b8f]/50 bg-gradient-to-br from-[#3a0b1f]/95 via-[#56112f]/92 to-[#2a0817]/95 hover:bg-gradient-to-br hover:from-[#4d0f29] hover:via-[#6c1740] hover:to-[#350a1d]"
                            : isPressure
                              ? "border-[#5fd68d]/50 bg-gradient-to-br from-[#0b2a16]/95 via-[#123b22]/92 to-[#081f12]/95 hover:bg-gradient-to-br hover:from-[#10361c] hover:via-[#184e2c] hover:to-[#0b2a17]"
                            : isDarts
                              ? "border-[#de3e50]/55 bg-gradient-to-br from-[#0c0c0f]/95 via-[#1a1a20]/92 to-[#0a0a0d]/95 hover:bg-gradient-to-br hover:from-[#1a1015] hover:via-[#25121b] hover:to-[#11090d]"
                            : isRooftop
                              ? "border-[#d5b17a]/55 bg-gradient-to-br from-[#2b1f14]/95 via-[#3b2b1d]/92 to-[#1d140d]/95 hover:bg-gradient-to-br hover:from-[#3a291a] hover:via-[#4f3724] hover:to-[#261a11]"
                      : "border-subtle bg-[rgb(var(--card)/0.62)] hover:bg-[rgb(var(--navy)/0.72)]"
                }`}
              >
                <div className="flex items-center gap-3">
                <div
                  className={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl text-[10px] font-semibold uppercase tracking-wide ${
                    isEvermore
                      ? "border border-[#d8b07d]/60 bg-[#2a1a10] text-[#f2d8ad]"
                      : isUnleashed
                        ? "border border-[#74bcff]/60 bg-[#0d2742] text-[#d6ecff]"
                        : isDauntless
                          ? "border border-[#f29a44]/60 bg-[#3b190a] text-[#ffd7b0]"
                        : isFrostbite
                          ? "border border-[#9ddfff]/60 bg-[#0c2b45] text-[#d9f2ff]"
                          : isHustle
                            ? "border border-[#ff79a7]/60 bg-[#4a0f28] text-[#ffd8e8]"
                            : isPressure
                              ? "border border-[#7fe7a6]/60 bg-[#0f3a20] text-[#dcffe8]"
                            : isDarts
                              ? "border border-[#ef6676]/60 bg-[#1b0f14] text-[#ffe6ea]"
                            : isRooftop
                              ? "border border-[#e5c38f]/60 bg-[#332417] text-[#ffedcf]"
                        : "border border-dashed border-white/30 bg-[rgb(var(--bg)/0.45)] text-muted"
                  }`}
                >
                  {committee.logoSrc ? (
                    <Image
                      src={committee.logoSrc}
                      alt={`${committee.name} logo`}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    "Logo"
                  )}
                  </div>
                  <h3
                    className={`text-base font-semibold ${
                      isEvermore
                        ? "text-[#f8e5c2]"
                        : isUnleashed
                          ? "text-[#d9edff]"
                          : isDauntless
                            ? "text-[#ffe1c3]"
                            : isFrostbite
                              ? "text-[#e1f4ff]"
                              : isHustle
                                ? "text-[#ffe3ee]"
                                : isPressure
                                  ? "text-[#e2ffed]"
                                  : isDarts
                                    ? "text-[#ffe9ee]"
                                    : isRooftop
                                      ? "text-[#ffefd4]"
                            : "text-foreground"
                    }`}
                  >
                    {committee.name}
                  </h3>
                </div>

                {committee.short && (
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      isEvermore
                        ? "text-[#e6cfad]"
                        : isUnleashed
                          ? "text-[#c4e3ff]"
                          : isDauntless
                            ? "text-[#ffd4ad]"
                            : isFrostbite
                              ? "text-[#cdeeff]"
                              : isHustle
                                ? "text-[#ffd1e3]"
                                : isPressure
                                  ? "text-[#c9f7dc]"
                                  : isDarts
                                    ? "text-[#ffd2d9]"
                                    : isRooftop
                                      ? "text-[#f8dfb9]"
                            : "text-muted"
                    }`}
                  >
                    {committee.short}
                  </p>
                )}
                {committee.lcStatement && (
                  <p
                    className={`mt-2 rounded-lg border px-3 py-2 text-xs leading-relaxed ${
                      isEvermore
                        ? "border-[#c59a62]/40 bg-[#1f150e]/70 text-[#f1d8b4] font-bold italic whitespace-pre-line"
                        : isUnleashed
                          ? "border-[#5caef8]/40 bg-[#0a223b]/70 text-[#d7ecff] font-bold italic whitespace-pre-line"
                          : isDauntless
                            ? "border-[#f29a44]/40 bg-[#321507]/70 text-[#ffdcb9] font-bold italic whitespace-pre-line"
                          : isFrostbite
                            ? "border-[#8fd7ff]/40 bg-[#0a2237]/70 text-[#dff3ff] font-bold italic whitespace-pre-line"
                          : isHustle
                            ? "border-[#ff79a7]/40 bg-[#380b1f]/70 text-[#ffdced] font-bold italic whitespace-pre-line"
                          : isPressure
                            ? "border-[#7fe7a6]/40 bg-[#0b2d19]/70 text-[#deffeb] font-bold italic whitespace-pre-line"
                          : isDarts
                            ? "border-[#ef6676]/40 bg-[#190c12]/70 text-[#ffe8ec] font-bold italic whitespace-pre-line"
                          : isRooftop
                            ? "border-[#e5c38f]/40 bg-[#2c1f14]/70 text-[#ffefd4] font-bold italic whitespace-pre-line"
                          : "border-subtle bg-[rgb(var(--bg)/0.35)] text-foreground/90 whitespace-pre-line"
                    }`}
                  >
                    {formattedStatement}
                  </p>
                )}

                {committee.details && committee.details.length > 0 && (
                  <ul
                    className={`mt-3 space-y-1.5 text-xs leading-relaxed ${
                      isEvermore
                        ? "text-[#e6cfad]"
                        : isUnleashed
                          ? "text-[#c4e3ff]"
                          : isDauntless
                            ? "text-[#ffd4ad]"
                            : isFrostbite
                              ? "text-[#cdeeff]"
                              : isHustle
                                ? "text-[#ffd1e3]"
                                : isPressure
                                  ? "text-[#c9f7dc]"
                                  : isDarts
                                    ? "text-[#ffd2d9]"
                                    : isRooftop
                                      ? "text-[#f8dfb9]"
                            : "text-muted"
                    }`}
                  >
                    {committee.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 space-y-2">
                  {committee.ibanEuro && (
                  <IbanCopyRow
                    label={ibanEuroLabel}
                    value={committee.ibanEuro}
                    copyLabel={copyLabel}
                    copiedLabel={copiedLabel}
                    variant={committee.cardVariant}
                  />
                )}
                {committee.ibanRon && (
                  <IbanCopyRow
                    label={ibanRonLabel}
                    value={committee.ibanRon}
                    copyLabel={copyLabel}
                    copiedLabel={copiedLabel}
                    variant={committee.cardVariant}
                  />
                )}
              </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
