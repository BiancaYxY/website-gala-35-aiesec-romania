"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ParticipantCard } from "@/components/participants/ParticipantCard";
import type { Participant } from "@/lib/supabase/participants";

type ParticipantsLabels = {
  title: string;
  filterByGeneration: string;
  filterByLc?: string;
  all: string;
  loadMore: string;
  noParticipants: string;
  errorLoading: string;
};

type ParticipantsApiResponse = {
  items: Participant[];
  hasMore: boolean;
  error?: string;
};

type ParticipantsGridProps = {
  labels: ParticipantsLabels;
  initialGeneration?: string;
  initialLc?: string;
};

const PAGE_SIZE = 10;
const LC_OPTIONS = [
  "Arad",
  "Brasov",
  "Bucharest",
  "Cluj-Napoca",
  "Constanta",
  "Craiova",
  "Galati",
  "Iasi",
  "Oradea",
  "Sibiu",
  "Suceava",
  "Pitesti",
  "Targu-Mures",
  "Timisoara",
  "University of Bucharest",
  "Other",
] as const;

function SkeletonCard() {
  return (
    <div className="rounded-xl bg-card p-2 ring-1 ring-white/10">
      <div className="aspect-[3/4] animate-pulse rounded-lg bg-white/10" />
      <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-white/10" />
      <div className="mt-1.5 h-2.5 w-1/3 animate-pulse rounded bg-white/10" />
    </div>
  );
}

export function ParticipantsGrid({ labels, initialGeneration = "all", initialLc = "all" }: ParticipantsGridProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedGeneration, setSelectedGeneration] = useState(initialGeneration || "all");
  const [selectedLc, setSelectedLc] = useState(initialLc || "all");
  const [yearInput, setYearInput] = useState(initialGeneration === "all" ? "" : initialGeneration);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingPage, setLoadingPage] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchPage(args: { generation: string; lc: string; page: number }) {
    const params = new URLSearchParams();
    params.set("gen", args.generation);
    params.set("lc", args.lc);
    params.set("page", String(args.page));
    params.set("pageSize", String(PAGE_SIZE));

    const res = await fetch(`/api/participants?${params.toString()}`, { cache: "no-store" });
    const data = (await res.json()) as ParticipantsApiResponse;

    if (!res.ok) {
      throw new Error(data.error || labels.errorLoading);
    }

    setHasMore(Boolean(data.hasMore));
    setPage(args.page);

    setParticipants(data.items ?? []);
  }

  async function refresh(generation: string, lc: string) {
    setInitialLoading(true);
    setError(null);
    try {
      await fetchPage({ generation, lc, page: 0 });
    } catch (err) {
      const message = err instanceof Error ? err.message : labels.errorLoading;
      setError(message);
      setParticipants([]);
      setHasMore(false);
    } finally {
      setInitialLoading(false);
    }
  }

  useEffect(() => {
    const genFromUrl = searchParams.get("gen") || "all";
    const lcFromUrl = searchParams.get("lc") || "all";
    setSelectedGeneration(genFromUrl);
    setSelectedLc(lcFromUrl);
    setYearInput(genFromUrl === "all" ? "" : genFromUrl);
    void refresh(genFromUrl, lcFromUrl);
  }, [searchParams]);

  const updateUrl = (nextGen: string, nextLc: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (nextGen === "all") {
      params.delete("gen");
    } else {
      params.set("gen", nextGen);
    }
    if (nextLc === "all") {
      params.delete("lc");
    } else {
      params.set("lc", nextLc);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const onChangeGeneration = (nextGen: string) => {
    if (nextGen === selectedGeneration) return;
    setSelectedGeneration(nextGen);
    updateUrl(nextGen, selectedLc);
  };

  const onChangeLc = (nextLc: string) => {
    if (nextLc === selectedLc) return;
    setSelectedLc(nextLc);
    updateUrl(selectedGeneration, nextLc);
  };

  const onYearInputChange = (value: string) => {
    const sanitized = value.replace(/\D/g, "").slice(0, 4);
    setYearInput(sanitized);

    if (sanitized.length === 0) {
      onChangeGeneration("all");
      return;
    }

    if (sanitized.length === 4) {
      onChangeGeneration(sanitized);
    }
  };

  const onChangePage = async (nextPage: number) => {
    if (loadingPage || nextPage < 0) return;
    setLoadingPage(true);
    setError(null);

    try {
      await fetchPage({ generation: selectedGeneration, lc: selectedLc, page: nextPage });
    } catch (err) {
      const message = err instanceof Error ? err.message : labels.errorLoading;
      setError(message);
    } finally {
      setLoadingPage(false);
    }
  };

  return (
    <section className="space-y-4">
      <div className="rounded-2xl bg-card p-4 ring-1 ring-white/10">
        <label htmlFor="generation-filter" className="mb-2 block text-sm font-medium text-foreground">
          {labels.filterByGeneration}
        </label>
        <div className="flex items-center gap-2">
          <input
            id="generation-filter"
            type="text"
            inputMode="numeric"
            pattern="\d{4}"
            maxLength={4}
            value={yearInput}
            onChange={(e) => onYearInputChange(e.target.value)}
            placeholder="2024"
            className="block w-full rounded-xl border border-subtle bg-background px-3 py-3 text-sm text-foreground"
          />
          <button
            type="button"
            onClick={() => onChangeGeneration("all")}
            className={`rounded-xl px-4 py-3 text-sm transition ${
              selectedGeneration === "all"
                ? "bg-gold text-black"
                : "border border-subtle bg-background text-foreground hover:bg-background/80"
            }`}
          >
            {labels.all}
          </button>
        </div>
        <label htmlFor="lc-filter" className="mb-2 mt-4 block text-sm font-medium text-foreground">
          {labels.filterByLc || "Filter by LC"}
        </label>
        <div className="flex items-center gap-2">
          <select
            id="lc-filter"
            value={selectedLc}
            onChange={(e) => onChangeLc(e.target.value)}
            className="block w-full rounded-xl border border-subtle bg-background px-3 py-3 text-sm text-foreground"
          >
            <option value="all">{labels.all}</option>
            {LC_OPTIONS.map((lc) => (
              <option key={lc} value={lc}>
                {lc}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => onChangeLc("all")}
            className="rounded-xl bg-gold px-4 py-3 text-sm text-black transition hover:brightness-110"
          >
            {labels.all}
          </button>
        </div>
      </div>

      {error && <div className="rounded-xl border border-red-400/40 bg-red-900/20 p-3 text-sm text-red-100">{error}</div>}

      {initialLoading ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : participants.length === 0 ? (
        <div className="rounded-2xl bg-card p-6 text-center text-sm text-muted ring-1 ring-white/10">
          {labels.noParticipants}
        </div>
      ) : (
        <>
          <div className="grid items-start grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {participants.map((participant) => (
              <ParticipantCard key={participant.id} participant={participant} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onChangePage(page - 1)}
              disabled={loadingPage || page === 0}
              className="rounded-2xl border border-subtle bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-background/80 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => onChangePage(page + 1)}
              disabled={loadingPage || !hasMore}
              className="rounded-2xl bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
}
