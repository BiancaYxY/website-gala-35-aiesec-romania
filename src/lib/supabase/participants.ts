export type Participant = {
  id: string;
  name: string;
  generation: string;
  photo_url: string | null;
  phone_number: string | null;
  email: string | null;
  linkedin: string | null;
  lc: string | null;
};

export type ParticipantsPageResult = {
  items: Participant[];
  hasMore: boolean;
};

const FEATURED_PARTICIPANT_IDS = new Set([
  "16f52330-d253-4d7c-bf4b-b595cd7604f1",
  "209484d4-d358-42e8-982e-3391f7c52a98",
  "219a7127-c953-487e-91d4-f194f668e41c",
  "85bc2cd3-4512-4a85-86b9-7c79930feff1",
  "8b47153e-2772-443b-81d9-08421a57692e",
  "964f0d09-2e8f-4344-9456-835a33fbcfea",
  "b29e72a5-4d58-4f0b-92ac-4a7fb87119ee",
  "c206f5c8-b246-4cc5-883c-f8def1e010bd",
  "e4ec235e-7857-4a3d-8bd3-db7ef3e8db74",
  "f4cd56c5-fcf2-4375-806f-91ce38fadcbc",
]);

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

function normalizeLc(value: string | null | undefined): string {
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
  lc?: string;
  featuredOnly?: boolean;
  page: number;
  pageSize: number;
}): Promise<ParticipantsPageResult> {
  const page = Math.max(0, args.page);
  const pageSize = Math.min(Math.max(1, args.pageSize), 48);

  const params = new URLSearchParams();
  params.set("select", "id,name,generation,photo_url,phone_number,email,linkedin,lc");
  params.set("order", "name.asc");
  const generation = normalizeGeneration(args.generation);
  const lc = normalizeLc(args.lc);

  const rows = await supabaseSelect<Participant[]>(params);
  const filteredRows = rows.filter((row) => {
    const generationMatches = generationMatchesFilter(normalizeGeneration(row.generation), generation);
    const lcMatches = !lc || lc.toLowerCase() === "all" ? true : normalizeLc(row.lc) === lc;
    const featuredMatches = args.featuredOnly ? FEATURED_PARTICIPANT_IDS.has(row.id) : true;
    return generationMatches && lcMatches && featuredMatches;
  });
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
