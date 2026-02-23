export type Participant = {
  id: string;
  name: string;
  generation: string;
  photo_url: string | null;
};

export type ParticipantsPageResult = {
  items: Participant[];
  hasMore: boolean;
};

const TABLE = "participants";

function getSupabaseEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error("Supabase env vars are missing: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }

  return { url, anonKey };
}

async function supabaseSelect<T>(params: URLSearchParams): Promise<T> {
  const { url, anonKey } = getSupabaseEnv();
  const endpoint = `${url}/rest/v1/${TABLE}?${params.toString()}`;

  const res = await fetch(endpoint, {
    headers: {
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Supabase query failed (${res.status}): ${body}`);
  }

  return (await res.json()) as T;
}

function normalizeGeneration(value: string | null | undefined): string {
  return (value ?? "").trim();
}

function parseYear(value: string): number | null {
  if (!/^\d{4}$/.test(value)) return null;
  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? null : parsed;
}

function parseGenerationInterval(value: string): { start: number; end: number } | null {
  const match = value.match(/^(\d{4})\s*-\s*(\d{4})$/);
  if (!match) return null;

  const start = Number.parseInt(match[1], 10);
  const end = Number.parseInt(match[2], 10);
  if (Number.isNaN(start) || Number.isNaN(end)) return null;

  return start <= end ? { start, end } : { start: end, end: start };
}

function generationMatchesFilter(generation: string, filter: string): boolean {
  const normalizedFilter = normalizeGeneration(filter);
  if (!normalizedFilter || normalizedFilter.toLowerCase() === "all") return true;

  const filterYear = parseYear(normalizedFilter);
  if (filterYear === null) {
    return generation === normalizedFilter;
  }

  const interval = parseGenerationInterval(generation);
  if (interval) {
    return filterYear >= interval.start && filterYear <= interval.end;
  }

  const singleGenerationYear = parseYear(generation);
  if (singleGenerationYear !== null) {
    return singleGenerationYear === filterYear;
  }

  return generation === normalizedFilter;
}

export async function listParticipantsByPage(args: {
  generation?: string;
  page: number;
  pageSize: number;
}): Promise<ParticipantsPageResult> {
  const page = Math.max(0, args.page);
  const pageSize = Math.min(Math.max(1, args.pageSize), 48);

  const params = new URLSearchParams();
  params.set("select", "id,name,generation,photo_url");
  params.set("order", "name.asc");
  const generation = normalizeGeneration(args.generation);

  const rows = await supabaseSelect<Participant[]>(params);
  const filteredRows = rows.filter((row) => generationMatchesFilter(normalizeGeneration(row.generation), generation));
  const offset = page * pageSize;
  const pageRows = filteredRows.slice(offset, offset + pageSize + 1);
  const hasMore = pageRows.length > pageSize;

  return {
    items: hasMore ? pageRows.slice(0, pageSize) : pageRows,
    hasMore,
  };
}

export async function listDistinctGenerations(): Promise<string[]> {
  const params = new URLSearchParams();
  params.set("select", "generation");
  params.set("order", "generation.asc");

  const rows = await supabaseSelect<Array<{ generation: string | null }>>(params);

  const unique = new Set<string>();
  for (const row of rows) {
    const generation = normalizeGeneration(row.generation);
    if (generation) unique.add(generation);
  }

  return [...unique].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}
