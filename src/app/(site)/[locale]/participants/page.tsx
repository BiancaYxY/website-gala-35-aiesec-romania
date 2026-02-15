import { ParticipantsGrid } from "@/components/participants/ParticipantsGrid";
import { getDict, t, type Locale } from "@/i18n/getDict";

export default async function ParticipantsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ gen?: string }>;
}) {
  const { locale } = await params;
  const { gen } = await searchParams;

  const l = locale as Locale;
  const dict = getDict(l);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold text-foreground">{t(dict, "participants.title")}</h1>

      <div className="mt-6">
        <ParticipantsGrid
          initialGeneration={gen ?? "all"}
          labels={{
            title: t(dict, "participants.title"),
            filterByGeneration: t(dict, "participants.filterByGeneration"),
            all: t(dict, "participants.all"),
            loadMore: t(dict, "participants.loadMore"),
            noParticipants: t(dict, "participants.noParticipants"),
            errorLoading: t(dict, "participants.errorLoading"),
          }}
        />
      </div>
    </main>
  );
}
