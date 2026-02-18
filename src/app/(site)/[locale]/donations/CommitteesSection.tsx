"use client";

import { useMemo, useState } from "react";
import { IbanCopyRow } from "./IbanCopyRow";

type Committee = {
  name: string;
  short: string;
  ibanEuro: string;
  ibanRon: string;
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
  const copyLabel = isRo ? "Copiaza" : "Copy";
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
    <section className="mt-10 md:mt-14">
      <h2 className="text-xl font-semibold md:text-3xl">
        {isRo ? "Comitete locale AIESEC in Romania" : "AIESEC local committees in Romania"}
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-muted md:text-base">
        {isRo
          ? "Placeholder cards pentru logo + descriere scurta. Fiecare card poate fi inlocuit ulterior cu identitatea vizuala si textul final."
          : "Placeholder cards for logo + short description. Each card can be replaced later with final visual identity and text."}
      </p>

      <div className="mt-5">
        <label htmlFor="committee-search" className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          {isRo ? "Cauta comitet local" : "Search local committee"}
        </label>
        <input
          id="committee-search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={isRo ? "Ex: Cluj, Iasi, Bucuresti" : "Ex: Cluj, Iasi, Bucharest"}
          className="w-full rounded-2xl border border-subtle bg-black/30 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted/80 focus:border-white/25 focus:ring-2 focus:ring-white/15"
        />
      </div>

      {filteredCommittees.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-subtle bg-black/20 px-4 py-8 text-center text-sm text-muted">
          {isRo ? "Nu am gasit niciun comitet pentru acest termen." : "No committee found for this search."}
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCommittees.map((committee) => (
            <article
              key={committee.name}
              className="rounded-2xl border border-subtle bg-black/25 p-5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-card/70"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-dashed border-white/40 bg-black/20 text-[10px] font-semibold uppercase tracking-wide text-muted">
                  Logo
                </div>
                <h3 className="text-base font-semibold text-foreground">{committee.name}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{committee.short}</p>
              <div className="mt-4 space-y-2">
                <IbanCopyRow
                  label={ibanEuroLabel}
                  value={committee.ibanEuro}
                  copyLabel={copyLabel}
                  copiedLabel={copiedLabel}
                />
                <IbanCopyRow
                  label={ibanRonLabel}
                  value={committee.ibanRon}
                  copyLabel={copyLabel}
                  copiedLabel={copiedLabel}
                />
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
