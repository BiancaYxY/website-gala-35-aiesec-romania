import { NextResponse } from "next/server";
import { listDistinctGenerations, listParticipantsByPage } from "@/lib/supabase/participants";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const generation = searchParams.get("gen") ?? "all";
  const page = Number.parseInt(searchParams.get("page") ?? "0", 10);
  const pageSize = Number.parseInt(searchParams.get("pageSize") ?? "12", 10);

  try {
    const [participants, generations] = await Promise.all([
      listParticipantsByPage({
        generation,
        page: Number.isNaN(page) ? 0 : page,
        pageSize: Number.isNaN(pageSize) ? 12 : pageSize,
      }),
      listDistinctGenerations(),
    ]);

    return NextResponse.json({
      items: participants.items,
      hasMore: participants.hasMore,
      generations,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load participants";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
