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

export async function listParticipantsByPage(args: {
  generation?: string;
  page: number;
  pageSize: number;
}): Promise<ParticipantsPageResult> {
  const page = Math.max(0, args.page);
  const pageSize = Math.min(Math.max(1, args.pageSize), 48);
  const offset = page * pageSize;

  const params = new URLSearchParams();
  params.set("select", "id,name,generation,photo_url");
  params.set("order", "name.asc");
  params.set("offset", String(offset));
  params.set("limit", String(pageSize + 1));

  const generation = normalizeGeneration(args.generation);
  if (generation && generation.toLowerCase() !== "all") {
    params.set("generation", `eq.${generation}`);
  }

  const rows = await supabaseSelect<Participant[]>(params);
  const hasMore = rows.length > pageSize;

  return {
    items: hasMore ? rows.slice(0, pageSize) : rows,
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
