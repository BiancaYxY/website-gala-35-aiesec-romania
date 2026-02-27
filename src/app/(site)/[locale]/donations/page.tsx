import Image from "next/image";
import { CommitteesSection } from "./CommitteesSection";

function getCommittees(isRo: boolean) {
  return [
    {
      name: "AIESEC în Brașov",
      lcStatement: "\"Fight or be forgotten\"\n\"Pârtie, vine Brașovu'!\"",
      ibanRon: "RO23 RNCB 0059 1632 3383 0005",
      logoSrc: "/frostbite.jpg",
      cardVariant: "frostbite",
      details: [
        isRo
          ? "Nume titular: ASOCIAȚIA INTERNAȚIONALĂ A STUDENȚILOR ÎN ȘTIINȚE ECONOMICE ȘI COMERCIALE - FILIALA BRAȘOV"
          : "Account holder: ASOCIATIA INTERNATIONALA A STUDENTILOR IN STIINTE ECONOMICE SI COMERCIALE - FILIALA BRASOV",
        isRo ? "Bancă: Banca Comercială Română (BCR)" : "Bank: Banca Comercială Română (BCR)",
      ],
    },
    {
      name: isRo ? "AIESEC în București" : "AIESEC in Bucharest",
      lcStatement: "\"Between now and forever, we won't stop till' we're legends\"\n\"I said we are AIESEC Bucharest\"",
      ibanRon: "RO60 RNCB 0072 0496 9495 0001",
      ibanEuro: "RO33 RNCB 0072 0496 9495 0002",
      logoSrc: "/evermore.jpg",
      cardVariant: "evermore",
      details: [
        isRo ? "Titular cont: AIESEC București" : "Account holder: AIESEC București",
        isRo ? "Adresă: Str. Frumoasă 31, sector 1" : "Address: Str. Frumoasă 31, sector 1",
        isRo ? "Cod SWIFT: RNCBROBU" : "SWIFT code: RNCBROBU",
      ],
    },
    {
      name: "AIESEC în Cluj-Napoca",
      lcStatement: "\"Dream like it's your first, act like it's your last\"\n\"Foaie verde Cluj, cât suntem noi nu se va pierde\"",
      ibanEuro: "RO37 BTRL 0130 4205 9195 14XX",
      ibanRon: "RO88 BTRL 0130 1205 9195 14XX",
      logoSrc: "/unleashed.jpg",
      cardVariant: "unleashed",
      details: [
        isRo ? "Titular cont: ASOCIAȚIA AIESEC CLUJ-NAPOCA" : "Account holder: ASOCIATIA AIESEC CLUJ-NAPOCA",
        isRo ? "Bancă: BT" : "Bank: BT",
      ],
    },
    {
      name: "AIESEC în Craiova",
      lcStatement: "\"Embrace the Challenge\"\n\"#oladădebere\"",
      ibanRon: "RO85 RNCB 0140 0184 5387 0001",
      logoSrc: "/dauntless.jpg",
      cardVariant: "dauntless",
      details: [
        isRo ? "Titular cont: AIESEC CRAIOVA" : "Account holder: AIESEC CRAIOVA",
        isRo ? "Bancă: BCR" : "Bank: BCR",
      ],
    },
    {
      name: "AIESEC în Galați",
      lcStatement: "\"We hustle our way to the tops\"\n\"Românie fă gălăgie, Galați istorie scrie\"",
      ibanRon: "RO13 RNCB 0141 1460 0174 0001",
      logoSrc: "/hustle.jpg",
      cardVariant: "hustle",
      details: [
        isRo ? "Titular cont: A.I.E.S.E.C. GALAȚI" : "Account holder: A.I.E.S.E.C. GALATI",
        isRo ? "Bancă: BCR" : "Bank: BCR",
      ],
    },
    {
      name: "AIESEC în Sibiu",
      lcStatement: isRo
        ? "LC statement: Promovăm colaborarea și dezvoltarea personală a tinerilor din Sibiu."
        : "LC statement: We promote collaboration and personal growth for young people in Sibiu.",
      ibanRon: "RO98 RNCB 0233 1312 1159 0001",
      details: [
        isRo
          ? "Titular cont: ASOCIAȚIA INTERNAȚIONALĂ A STUDENȚILOR ÎN ECONOMIE ȘI MANAGEMENT – AIESEC"
          : "Account holder: ASOCIATIA INTERNATIONALA A STUDENTILOR IN ECONOMIE SI MANAGEMENT – AIESEC",
        isRo ? "Bancă: BCR" : "Bank: BCR",
      ],
    },
    {
      name: "AIESEC în Iași",
      lcStatement: "\"Feel the pressure to go for 1 more\"\n\"Șini Ardi Șel mai Tari?\"",
      ibanRon: "RO08 RNCB 0175 0336 1532 0001",
      ibanEuro: "RO78 RNCB 0175 0336 1532 0002",
      logoSrc: "/pressure.jpg",
      cardVariant: "pressure",
      details: [
        isRo ? "Nume titular: AIESEC Iași" : "Account holder: AIESEC Iași",
        isRo ? "Cod BIC/SWIFT: RNCBROBU" : "BIC/SWIFT code: RNCBROBU",
      ],
    },
    {
      name: "AIESEC în Constanța",
      lcStatement: isRo
        ? "\"AIESEC în Constanța\""
        : "\"AIESEC in Constanta\"",
      details: [
        isRo
          ? "Detaliile de transfer pentru acest comitet vor fi adăugate în curând."
          : "Transfer details for this committee will be added soon.",
      ],
    },
    {
      name: "AIESEC în Oradea",
      lcStatement: isRo
        ? "LC statement: Dezvoltăm tineri implicați civic și profesional în comunitatea din Oradea."
        : "LC statement: We develop civically and professionally engaged youth in the Oradea community.",
      ibanRon: "RO20 RNCB 0825 1638 2615 0001",
      details: [
        isRo ? "Titular cont: ASOCIAȚIA AIESEC ORADEA" : "Account holder: ASOCIATIA AIESEC ORADEA",
        isRo ? "Bancă: BCR" : "Bank: BCR",
      ],
    },
    {
      name: "AIESEC în Timișoara",
      lcStatement: "\"Luck belongs to those who aim\"\n\"Revoluție Timișoara, Evoluție Timișoara\"",
      ibanRon: "RO17 RNCB 0255 1376 7305 0001",
      logoSrc: "/darts.jpg",
      cardVariant: "darts",
      details: [
        isRo ? "Titular cont: ASOCIAȚIA AIESEC ÎN TIMIȘOARA" : "Account holder: ASOCIATIA AIESEC IN TIMISOARA",
        isRo ? "Bancă: BCR" : "Bank: BCR",
      ],
    },
    {
      name: "AIESEC în Universitatea București",
      lcStatement: "\"From the roof of our HOME, to the top of the WORLD\"\n\"Who's in the house?\"",
      ibanRon: "RO43 RNCB 0092 1627 7721 0001",
      logoSrc: "/rooftop.jpg",
      cardVariant: "rooftop",
      details: [
        isRo
          ? "Titular cont: ASOCIAȚIA AIESEC ÎN UNIVERSITATEA DIN BUCUREȘTI"
          : "Account holder: ASOCIATIA AIESEC IN UNIVERSITATEA DIN BUCURESTI",
        isRo ? "Bancă: BCR" : "Bank: BCR",
      ],
    },
    {
      name: "AIESEC în Suceava",
      lcStatement: isRo
        ? "\"AIESEC în Suceava\""
        : "\"AIESEC in Suceava\"",
      details: [
        isRo
          ? "Detaliile de transfer pentru acest comitet vor fi adăugate în curând."
          : "Transfer details for this committee will be added soon.",
      ],
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
      <section className="rounded-3xl border border-[#b13a4f]/55 bg-gradient-to-br from-[#7b1428] via-[#631022] to-[#470b19] p-5 text-foreground shadow-[0_24px_48px_rgba(0,0,0,0.3)] md:p-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          {isRo ? "Scrisoare deschisă" : "Open letter"}
        </p>
        <h1 className="text-2xl font-semibold leading-tight text-foreground md:text-4xl">
          {isRo
            ? "Un mesaj către comunitatea AIESEC în România"
            : "A message to the AIESEC in Romania community"}
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-white/90 md:text-base">
          {isRo
            ? "Acesta este un text placeholder pentru zona de scrisoare. Aici va veni mesajul principal despre direcția campaniei de donații, impact și cum poate contribui fiecare persoană."
            : "This is placeholder copy for the letter section. This is where the main message about the donation campaign, impact, and ways to contribute will be placed."}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-white/90 md:text-base">
          {isRo
            ? "Puteți înlocui acest text cu varianta finală în română și engleză după ce validați structura paginii."
            : "You can replace this with final Romanian and English copy once the page structure is approved."}
        </p>
        <p className="mt-8 text-sm italic text-gold">
          {isRo ? "Cu apreciere, Echipa Gala 35" : "With appreciation, Gala 35 Team"}
        </p>
      </section>

      <section className="mx-auto mt-1 w-full max-w-6xl px-0 py-0 md:mt-1">
        <div className="mx-auto w-full max-w-6xl overflow-visible">
          <Image
            src="/rooted%20in%20romania.svg"
            alt="Rooted in Romania"
            width={1400}
            height={380}
            className="mx-auto -mb-10 h-72 w-full object-contain sm:-mb-12 sm:h-80 md:-mb-14 md:h-[30rem] lg:h-[36rem]"
            priority
          />
        </div>
      </section>

      <CommitteesSection isRo={isRo} committees={committees} />
    </main>
  );
}
