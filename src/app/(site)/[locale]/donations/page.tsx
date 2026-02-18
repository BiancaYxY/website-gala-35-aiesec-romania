import { CommitteesSection } from "./CommitteesSection";

function getCommittees(isRo: boolean) {
  const bucharestName = isRo ? "Bucuresti" : "Bucharest";

  return [
    {
      name: `AIESEC in Brasov`,
      short: "Placeholder text about this local committee and its fundraising focus.",
      ibanEuro: "RO00AAAA0000000000000001",
      ibanRon: "RO00BBBB0000000000000001",
    },
    {
      name: `AIESEC in ${bucharestName}`,
      short: "Placeholder text about this local committee and its fundraising focus.",
      ibanEuro: "RO00AAAA0000000000000002",
      ibanRon: "RO00BBBB0000000000000002",
    },
    {
      name: "AIESEC in Cluj-Napoca",
      short: "Placeholder text about this local committee and its fundraising focus.",
      ibanEuro: "RO00AAAA0000000000000003",
      ibanRon: "RO00BBBB0000000000000003",
    },
    {
      name: "AIESEC in Craiova",
      short: "Placeholder text about this local committee and its fundraising focus.",
      ibanEuro: "RO00AAAA0000000000000004",
      ibanRon: "RO00BBBB0000000000000004",
    },
    {
      name: "AIESEC in Galati",
      short: "Placeholder text about this local committee and its fundraising focus.",
      ibanEuro: "RO00AAAA0000000000000005",
      ibanRon: "RO00BBBB0000000000000005",
    },
    {
      name: "AIESEC in Iasi",
      short: "Placeholder text about this local committee and its fundraising focus.",
      ibanEuro: "RO00AAAA0000000000000006",
      ibanRon: "RO00BBBB0000000000000006",
    },
    {
      name: "AIESEC in Oradea",
      short: "Placeholder text about this local committee and its fundraising focus.",
      ibanEuro: "RO00AAAA0000000000000007",
      ibanRon: "RO00BBBB0000000000000007",
    },
    {
      name: "AIESEC in Sibiu",
      short: "Placeholder text about this local committee and its fundraising focus.",
      ibanEuro: "RO00AAAA0000000000000008",
      ibanRon: "RO00BBBB0000000000000008",
    },
    {
      name: "AIESEC in Suceava",
      short: "Placeholder text about this local committee and its fundraising focus.",
      ibanEuro: "RO00AAAA0000000000000009",
      ibanRon: "RO00BBBB0000000000000009",
    },
    {
      name: "AIESEC in Timisoara",
      short: "Placeholder text about this local committee and its fundraising focus.",
      ibanEuro: "RO00AAAA0000000000000010",
      ibanRon: "RO00BBBB0000000000000010",
    },
    {
      name: "AIESEC in UB",
      short: "Placeholder text about this local committee and its fundraising focus.",
      ibanEuro: "RO00AAAA0000000000000011",
      ibanRon: "RO00BBBB0000000000000011",
    },
  ];
}

export default async function DonationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRo = locale === "ro";
  const committees = getCommittees(isRo);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
      <section className="rounded-3xl border border-subtle bg-gradient-to-br from-[#f7f1e4] via-[#f3ead8] to-[#e9dcc4] p-5 text-[#1c1f2e] shadow-[0_22px_44px_rgba(0,0,0,0.22)] md:p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#7c5a2c]">
          {isRo ? "Scrisoare deschisa" : "Open letter"}
        </p>
        <h1 className="text-2xl font-semibold leading-tight md:text-4xl">
          {isRo
            ? "Un mesaj catre comunitatea AIESEC in Romania"
            : "A message to the AIESEC in Romania community"}
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-[#2f3447] md:text-base">
          {isRo
            ? "Acesta este un text placeholder pentru zona de scrisoare. Aici va veni mesajul principal despre directia campaniei de donatii, impact si cum poate contribui fiecare persoana."
            : "This is placeholder copy for the letter section. This is where the main message about the donation campaign, impact, and ways to contribute will be placed."}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-[#2f3447] md:text-base">
          {isRo
            ? "Puteti inlocui acest text cu varianta finala in romana si engleza dupa ce validati structura paginii."
            : "You can replace this with final Romanian and English copy once the page structure is approved."}
        </p>
        <p className="mt-8 text-sm italic text-[#5b4a2f]">
          {isRo ? "Cu apreciere, Echipa Gala 35" : "With appreciation, Gala 35 Team"}
        </p>
      </section>

      <CommitteesSection isRo={isRo} committees={committees} />
    </main>
  );
}
