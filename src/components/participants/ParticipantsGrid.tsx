"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ParticipantCard } from "@/components/participants/ParticipantCard";
import type { Participant } from "@/lib/supabase/participants";

type ParticipantsLabels = {
  title: string;
  filterByGeneration: string;
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
};

const PAGE_SIZE = 12;

function SkeletonCard() {
  return (
    <div className="rounded-xl bg-card p-2 ring-1 ring-white/10">
      <div className="aspect-[3/4] animate-pulse rounded-lg bg-white/10" />
      <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-white/10" />
      <div className="mt-1.5 h-2.5 w-1/3 animate-pulse rounded bg-white/10" />
    </div>
  );
}

export function ParticipantsGrid({ labels, initialGeneration = "all" }: ParticipantsGridProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [selectedGeneration, setSelectedGeneration] = useState(initialGeneration || "all");
  const [yearInput, setYearInput] = useState(initialGeneration === "all" ? "" : initialGeneration);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchPage(args: { generation: string; page: number; reset: boolean }) {
    const params = new URLSearchParams();
    params.set("gen", args.generation);
    params.set("page", String(args.page));
    params.set("pageSize", String(PAGE_SIZE));

    const res = await fetch(`/api/participants?${params.toString()}`, { cache: "no-store" });
    const data = (await res.json()) as ParticipantsApiResponse;

    if (!res.ok) {
      throw new Error(data.error || labels.errorLoading);
    }

    setHasMore(Boolean(data.hasMore));
    setPage(args.page);

    if (args.reset) {
      setParticipants(data.items ?? []);
      return;
    }

    setParticipants((prev) => [...prev, ...(data.items ?? [])]);
  }

  async function refresh(generation: string) {
    setInitialLoading(true);
    setError(null);
    try {
      await fetchPage({ generation, page: 0, reset: true });
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
    setSelectedGeneration(genFromUrl);
    setYearInput(genFromUrl === "all" ? "" : genFromUrl);
    void refresh(genFromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const updateUrl = (nextGen: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (nextGen === "all") {
      params.delete("gen");
    } else {
      params.set("gen", nextGen);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const onChangeGeneration = (nextGen: string) => {
    if (nextGen === selectedGeneration) return;
    setSelectedGeneration(nextGen);
    updateUrl(nextGen);
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

  const onLoadMore = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    setError(null);

    try {
      await fetchPage({ generation: selectedGeneration, page: page + 1, reset: false });
    } catch (err) {
      const message = err instanceof Error ? err.message : labels.errorLoading;
      setError(message);
    } finally {
      setLoadingMore(false);
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
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {participants.map((participant) => (
              <ParticipantCard key={participant.id} participant={participant} />
            ))}
          </div>

          {hasMore && (
            <div className="flex justify-center">
              <button
                type="button"
                onClick={onLoadMore}
                disabled={loadingMore}
                className="rounded-2xl bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loadingMore ? `${labels.loadMore}...` : labels.loadMore}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
