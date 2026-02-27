import Image from "next/image";
import { CommitteesSection } from "./CommitteesSection";
import type { Committee } from "./CommitteesSection";

function getCommittees(isRo: boolean): Committee[] {
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
      <section className="rounded-3xl border border-[#b13a4f]/55 bg-[linear-gradient(to_bottom,_#4a0d18_0%,_#5b2a2f_28%,_#145f36_100%)] p-5 text-foreground shadow-[0_24px_48px_rgba(0,0,0,0.3)] md:p-8">
        <div className="mt-5 space-y-4 text-justify text-[15px] leading-relaxed text-white/90 md:text-base">
          {isRo ? (
            <>
              <p>Dragi AIESEC-eri,</p>
              <p>
                Anul acesta sărbătorim 35 de ani de când un vis numit AIESEC a devenit realitate, un vis în care tinerii
                pornesc într-o călătorie de a deveni lideri ghidați de valori, care creează un impact real în comunitățile
                lor.
              </p>
              <p>
                Astăzi, cu peste 700 de membri în fiecare an, o creștere continuă a programelor de schimb și curajul de a
                depăși orice provocare, AIESEC în România continuă să prospere ca una dintre cele mai puternice entități la
                nivel global din punct de vedere al numărului de schimburi livrate.
              </p>
              <p>
                Sunt plin de energie și entuziasm să mă conectez cu cât mai mulți Alumni la Gală și să sărbătorim anii care
                ne-au clădit valorile de leadership.
              </p>
              <p className="text-sm italic text-gold">Emi Iftimie - MCP 25.26</p>
              <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl border border-white/15 bg-black/10 p-2">
                <Image
                  src="/MC%20HORA%20red.png"
                  alt="MC Hora logo"
                  width={700}
                  height={300}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="my-2 h-px w-full bg-gradient-to-r from-transparent via-white/45 to-transparent" />
              <p>Hey AIESEC,</p>
              <p>
                În primul rând, sunt foarte entuziasmată să vă cunosc pe fiecare dintre voi și să vă împărtășesc ambițiile
                mele pentru AIESEC în România pentru noua generație.
              </p>
              <p>
                În timpul mandatului 26.27, AIESEC în România va continua să dezvolte lideri ghidați de valori prin stagii
                de schimb de înaltă calitate. Împreună cu viitorul MC, îmi propun să construiesc în continuare o entitate
                care să seteze standarde atât în plenara globală, cât și în societatea din România - o entitate condusă de
                membri suficient de curajoși încât să tindă spre excelență.
              </p>
              <p>
                Îmi imaginez o comunitate de oameni care își impun standarde înalte, care nu se mulțumesc niciodată cu
                „destul de bine”, care caută constant creșterea și învățarea, care inovează cu curaj și care dau tot ce au
                mai bun în tot ceea ce fac.
              </p>
              <p>
                Abia aștept Gala pentru a mă conecta cu voi toți - pentru a genera idei, pentru a alimenta ambiția și pentru
                a aprinde impulsul care va duce AIESEC în România mai departe.
              </p>
              <p className="text-sm italic text-gold">Lavinia - MCP 26.27</p>
              <p className="text-sm italic text-gold">Once an AIESECer, always an AIESECer. 💙</p>
            </>
          ) : (
            <>
              <p>Dear AIESECers,</p>
              <p>
                This year, we celebrate 35 years since a dream called AIESEC became reality, a dream where young people
                step into a journey of becoming value-driven leaders who create real impact in their communities.
              </p>
              <p>
                Today, with over 700 members every year, continuous growth in exchange programs, and the courage to
                overcome every challenge, AIESEC in Romania continues to thrive as one of the strongest entities globally in
                number of exchanges delivered.
              </p>
              <p>
                I am truly full of energy and enthusiasm to connect with as many Alumni as possible at the Gala and
                celebrate the years that built our leadership values.
              </p>
              <p className="text-sm italic text-gold">Emi Iftimie - MCP 25.26</p>
              <div className="mx-auto w-full max-w-sm overflow-hidden rounded-xl border border-white/15 bg-black/10 p-2">
                <Image
                  src="/MC%20HORA%20red.png"
                  alt="MC Hora logo"
                  width={900}
                  height={360}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="my-2 h-px w-full bg-gradient-to-r from-transparent via-white/45 to-transparent" />
              <p>Hey AIESEC,</p>
              <p>
                First of all, I am very excited to meet each and everyone of you and to share my ambitions for AIESEC in Romania
                for the next generation.
              </p>
              <p>
                During 26.27 term, AIESEC in Romania will continue developing value-driven leaders through high-quality
                exchanges. Together with the next MC team, I aim to further build an entity that sets standards both within
                the global plenary and in Romanian society - an entity driven by members bold enough to strive for
                excellence.
              </p>
              <p>
                I envision a community of individuals who set high standards for themselves, who are never satisfied with
                “good enough,” who constantly seek growth and learning, who innovate with courage, and who give their
                absolute best in everything they do.
              </p>
              <p>
                I cannot wait for the gala to connect with all of you — to spark ideas, fuel ambition, and ignite the
                momentum that will carry AIESEC in Romania forward.
              </p>
              <p className="text-sm italic text-gold">Lavinia - MCP 26.27</p>
            </>
          )}
        </div>
        <p className="mt-7 text-center text-base font-semibold text-gold md:text-lg">
          {isRo ? "Viziunea pentru mandatul 2026-2027" : "Vision for term 2026-2027"}
        </p>
        <div className="mt-3 -mx-4 overflow-hidden rounded-2xl border border-white/15 bg-black/10 md:-mx-8">
          <Image
            src="/lavinia_vision.svg"
            alt="Lavinia Vision"
            width={1400}
            height={780}
            className="h-auto w-full object-contain"
          />
        </div>
      </section>

      <section className="mx-auto mt-1 w-full max-w-6xl px-0 py-0 md:mt-1">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-center gap-2 overflow-visible md:gap-4">
          <Image
            src="/romania%20everywhere.svg"
            alt="Romania Everywhere"
            width={900}
            height={380}
            className="mx-auto h-36 w-full object-contain sm:h-44 md:h-52 lg:h-56"
            priority
          />
          <Image
            src="/rooted%20in%20romania.svg"
            alt="Rooted in Romania"
            width={1400}
            height={380}
            className="mx-auto h-52 w-full object-contain sm:h-60 md:h-72 lg:h-[24rem]"
            priority
          />
        </div>
      </section>

      <CommitteesSection isRo={isRo} committees={committees} />
    </main>
  );
}
