import Image from "next/image";
import { CommitteesSection } from "./CommitteesSection";
import type { Committee } from "./CommitteesSection";

function getCommittees(isRo: boolean): Committee[] {
  return [
    {
      name: "AIESEC Ä‚Â®n Bra?ov",
      lcStatement: "\"Fight or be forgotten\"\n\"PÄ‚Ërtie, vine Bra?ovu'!\"",
      ibanRon: "RO23 RNCB 0059 1632 3383 0005",
      logoSrc: "/frostbite.jpg",
      cardVariant: "frostbite",
      details: [
        isRo
          ? "Nume titular: ASOCIA?IA INTERNA?IONALĂ„â€š A STUDEN?ILOR Ä‚Ĺ˝N ?TIIN?E ECONOMICE ?I COMERCIALE - FILIALA BRA?OV"
          : "Account holder: ASOCIATIA INTERNATIONALA A STUDENTILOR IN STIINTE ECONOMICE SI COMERCIALE - FILIALA BRASOV",
        isRo ? "BancĂ„Â: Banca ComercialĂ„Â RomÄ‚ËnĂ„Â (BCR)" : "Bank: Banca ComercialĂ„Â RomÄ‚ËnĂ„Â (BCR)",
      ],
    },
    {
      name: isRo ? "AIESEC Ä‚Â®n Bucure?ti" : "AIESEC in Bucharest",
      lcStatement: "\"Between now and forever, we won't stop till' we're legends\"\n\"I said we are AIESEC Bucharest\"",
      ibanRon: "RO60 RNCB 0072 0496 9495 0001",
      ibanEuro: "RO33 RNCB 0072 0496 9495 0002",
      logoSrc: "/evermore.jpg",
      cardVariant: "evermore",
      details: [
        isRo ? "Titular cont: AIESEC Bucure?ti" : "Account holder: AIESEC Bucure?ti",
        isRo ? "AdresĂ„Â: Str. FrumoasĂ„Â 31, sector 1" : "Address: Str. FrumoasĂ„Â 31, sector 1",
        isRo ? "Cod SWIFT: RNCBROBU" : "SWIFT code: RNCBROBU",
      ],
    },
    {
      name: "AIESEC Ä‚Â®n Cluj-Napoca",
      lcStatement: "\"Dream like it's your first, act like it's your last\"\n\"Foaie verde Cluj, cÄ‚Ët suntem noi nu se va pierde\"",
      ibanEuro: "RO37 BTRL 0130 4205 9195 14XX",
      ibanRon: "RO88 BTRL 0130 1205 9195 14XX",
      logoSrc: "/unleashed.jpg",
      cardVariant: "unleashed",
      details: [
        isRo ? "Titular cont: ASOCIA?IA AIESEC CLUJ-NAPOCA" : "Account holder: ASOCIATIA AIESEC CLUJ-NAPOCA",
        isRo ? "BancĂ„Â: BT" : "Bank: BT",
      ],
    },
    {
      name: "AIESEC Ä‚Â®n Constan?a",
      lcStatement: isRo
        ? "\"AIESEC Ä‚Â®n Constan?a\""
        : "\"AIESEC in Constanta\"",
      details: [
        isRo
          ? "Detaliile de transfer pentru acest comitet vor fi adĂ„Âugate Ä‚Â®n curÄ‚Ënd."
          : "Transfer details for this committee will be added soon.",
      ],
    },
    {
      name: "AIESEC Ä‚Â®n Craiova",
      lcStatement: "\"Embrace the Challenge\"\n\"#oladĂ„Âdebere\"",
      ibanRon: "RO85 RNCB 0140 0184 5387 0001",
      logoSrc: "/dauntless.jpg",
      cardVariant: "dauntless",
      details: [
        isRo ? "Titular cont: AIESEC CRAIOVA" : "Account holder: AIESEC CRAIOVA",
        isRo ? "BancĂ„Â: BCR" : "Bank: BCR",
      ],
    },
    {
      name: "AIESEC Ä‚Â®n Gala?i",
      lcStatement: "\"We hustle our way to the tops\"\n\"RomÄ‚Ënie fĂ„Â gĂ„ÂlĂ„Âgie, Gala?i istorie scrie\"",
      ibanRon: "RO13 RNCB 0141 1460 0174 0001",
      logoSrc: "/hustle.jpg",
      cardVariant: "hustle",
      details: [
        isRo ? "Titular cont: A.I.E.S.E.C. GALA?I" : "Account holder: A.I.E.S.E.C. GALATI",
        isRo ? "BancĂ„Â: BCR" : "Bank: BCR",
      ],
    },
    {
      name: "AIESEC Ä‚Â®n Ia?i",
      lcStatement: "\"Feel the pressure to go for 1 more\"\n\"?ini Ardi ?el mai Tari?\"",
      ibanRon: "RO08 RNCB 0175 0336 1532 0001",
      ibanEuro: "RO78 RNCB 0175 0336 1532 0002",
      logoSrc: "/pressure.jpg",
      cardVariant: "pressure",
      details: [
        isRo ? "Nume titular: AIESEC Ia?i" : "Account holder: AIESEC Ia?i",
        isRo ? "Cod BIC/SWIFT: RNCBROBU" : "BIC/SWIFT code: RNCBROBU",
      ],
    },
    {
      name: "AIESEC Ä‚Â®n Oradea",
      lcStatement: isRo
        ? "LC statement: DezvoltĂ„Âm tineri implica?i civic ?i profesional Ä‚Â®n comunitatea din Oradea."
        : "LC statement: We develop civically and professionally engaged youth in the Oradea community.",
      ibanRon: "RO20 RNCB 0825 1638 2615 0001",
      details: [
        isRo ? "Titular cont: ASOCIA?IA AIESEC ORADEA" : "Account holder: ASOCIATIA AIESEC ORADEA",
        isRo ? "BancĂ„Â: BCR" : "Bank: BCR",
      ],
    },
    {
      name: "AIESEC Ä‚Â®n Sibiu",
      lcStatement: isRo
        ? "LC statement: PromovĂ„Âm colaborarea ?i dezvoltarea personalĂ„Â a tinerilor din Sibiu."
        : "LC statement: We promote collaboration and personal growth for young people in Sibiu.",
      ibanRon: "RO98 RNCB 0233 1312 1159 0001",
      details: [
        isRo
          ? "Titular cont: ASOCIA?IA INTERNA?IONALĂ„â€š A STUDEN?ILOR Ä‚Ĺ˝N ECONOMIE ?I MANAGEMENT Ă˘â‚¬â€ś AIESEC"
          : "Account holder: ASOCIATIA INTERNATIONALA A STUDENTILOR IN ECONOMIE SI MANAGEMENT Ă˘â‚¬â€ś AIESEC",
        isRo ? "BancĂ„Â: BCR" : "Bank: BCR",
      ],
    },
    {
      name: "AIESEC Ä‚Â®n Suceava",
      lcStatement: isRo
        ? "\"AIESEC Ä‚Â®n Suceava\""
        : "\"AIESEC in Suceava\"",
      details: [
        isRo
          ? "Detaliile de transfer pentru acest comitet vor fi adĂ„Âugate Ä‚Â®n curÄ‚Ënd."
          : "Transfer details for this committee will be added soon.",
      ],
    },
    {
      name: "AIESEC Ä‚Â®n Timi?oara",
      lcStatement: "\"Luck belongs to those who aim\"\n\"Revolu?ie Timi?oara, Evolu?ie Timi?oara\"",
      ibanRon: "RO17 RNCB 0255 1376 7305 0001",
      logoSrc: "/darts.jpg",
      cardVariant: "darts",
      details: [
        isRo ? "Titular cont: ASOCIA?IA AIESEC Ä‚Ĺ˝N TIMI?OARA" : "Account holder: ASOCIATIA AIESEC IN TIMISOARA",
        isRo ? "BancĂ„Â: BCR" : "Bank: BCR",
      ],
    },
    {
      name: "AIESEC Ä‚Â®n Universitatea Bucure?ti",
      lcStatement: "\"From the roof of our HOME, to the top of the WORLD\"\n\"Who's in the house?\"",
      ibanRon: "RO43 RNCB 0092 1627 7721 0001",
      logoSrc: "/rooftop.jpg",
      cardVariant: "rooftop",
      details: [
        isRo
          ? "Titular cont: ASOCIA?IA AIESEC Ä‚Ĺ˝N UNIVERSITATEA DIN BUCURE?TI"
          : "Account holder: ASOCIATIA AIESEC IN UNIVERSITATEA DIN BUCURESTI",
        isRo ? "BancĂ„Â: BCR" : "Bank: BCR",
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
          {isRo ? "Scrisoare deschisĂ„Â" : "Open letter"}
        </p>
        <h1 className="text-2xl font-semibold leading-tight text-foreground md:text-4xl">
          {isRo
            ? "Un mesaj cĂ„Âtre comunitatea AIESEC Ä‚Â®n RomÄ‚Ënia"
            : "A message to the AIESEC in Romania community"}
        </h1>
        <p className="mt-5 text-[15px] leading-relaxed text-white/90 md:text-base">
          {isRo
            ? "Acesta este un text placeholder pentru zona de scrisoare. Aici va veni mesajul principal despre direc?ia campaniei de dona?ii, impact ?i cum poate contribui fiecare persoanĂ„Â."
            : "This is placeholder copy for the letter section. This is where the main message about the donation campaign, impact, and ways to contribute will be placed."}
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-white/90 md:text-base">
          {isRo
            ? "Pute?i Ä‚Â®nlocui acest text cu varianta finalĂ„Â Ä‚Â®n romÄ‚ËnĂ„Â ?i englezĂ„Â dupĂ„Â ce valida?i structura paginii."
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

