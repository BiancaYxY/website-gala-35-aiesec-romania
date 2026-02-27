import Image from "next/image";
import Link from "next/link";
import { GalaCountdown } from "@/components/home/GalaCountdown";
import { SheratonCarousel } from "@/components/home/SheratonCarousel";
import { type Locale } from "@/i18n/getDict";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const homeCopy =
    l === "ro"
      ? {
          intro:
            "AIESEC în România sărbătorește 35 de ani de excelență prin leadership! Te așteptăm la Gala Aniversară, locul unde generațiile trecute, prezente și viitoare au șansa să se re-conecteze, unde vom rememora rezultatele din trecut și vom celebra reușitele din prezent✨",
          whyTitle: "De ce să participi?",
          alumni:
            "Dragi alumni, această Gală este ocazia perfectă să vă re-conectați cu liderii AIESEC în România, să deveniți un stâlp și mai puternic în activitatea noastră, să vă reamintiți de amprenta pe care ați lăsat-o și fundația creată, pe care alte generații au construit mai departe.",
          active:
            "Dragi membri activi, Gala 35 este oportunitatea perfectă de a înțelege istoria AIESEC în România și de a crea noi conexiuni cu cei ce au stat cândva în locul vostru, învățând din reușitele lor.",
          logistics:
            "Vă așteptăm pe 24 și 25 aprilie, la București. Agenda evenimentului va fi trimisă în curând❤️‍🔥",
          closing: "Ne vedem curând ✨",
          signature: "MC Hora și CC Gala 35 💃🏻",
        }
      : {
          intro:
            "AIESEC in Romania celebrates 35 years of excellence through leadership! We invite you to the Anniversary Gala, where past, present, and future generations have the chance to reconnect, where we will revisit past results and celebrate present achievements✨",
          whyTitle: "Why should you attend?",
          alumni:
            "Dear alumni, this Gala is the perfect opportunity to reconnect with AIESEC in Romania leaders, become an even stronger pillar in our activity, remember the mark you left, and the foundation you built that other generations continued to grow.",
          active:
            "Dear active members, Gala 35 is the perfect opportunity to understand AIESEC in Romania's history and create new connections with those who once stood in your place, learning from their achievements.",
          logistics:
            "We are waiting for you on April 24th and 25th, in Bucharest. The event agenda will be shared soon❤️‍🔥",
          closing: "See you soon ✨",
          signature: "MC Hora and CC Gala 35 💃🏻",
        };
  const calendarTitle =
    l === "ro"
      ? "Gala Aniversară AIESEC în România - 35 de ani"
      : "AIESEC in Romania Anniversary Gala - 35 Years";
  const calendarDetails =
    l === "ro"
      ? "Eveniment desfășurat în perioada 24-25 aprilie la Hotel Sheraton București. Mai multe detalii pe site."
      : "Event taking place on April 24-25 at Sheraton Hotel Bucharest. More details on the website.";
  const calendarParams = new URLSearchParams({
    action: "TEMPLATE",
    text: calendarTitle,
    dates: "20260424/20260426",
    details: calendarDetails,
    location: "Calea Dorobanților 5-7, București, România, 010551",
  });
  const calendarUrl = `https://calendar.google.com/calendar/render?${calendarParams.toString()}`;

  return (
    <main className="mx-auto max-w-6xl px-4 pt-1 pb-6">
      <section className="mx-auto mb-0.5 w-full max-w-4xl overflow-hidden rounded-2xl">
        <Image
          src="/35%20years%20of%20excellence.svg"
          alt="35 Years of Excellence"
          width={1400}
          height={360}
          className="h-56 w-full object-cover object-center md:h-72 lg:h-80"
          priority
        />
      </section>

      <section className="mx-auto w-full max-w-4xl rounded-3xl bg-[#4b0000]/85 px-4 py-6 ring-1 ring-white/15 md:px-8 md:py-8 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-4 text-justify text-base text-white/90 sm:text-lg">
          <p>{homeCopy.intro}</p>
          <p className="font-semibold text-foreground">{homeCopy.whyTitle}</p>
          <p>{homeCopy.alumni}</p>
          <p>{homeCopy.active}</p>
          <p>{homeCopy.logistics}</p>
          <p>{homeCopy.closing}</p>
          <p className="font-medium text-foreground">{homeCopy.signature}</p>
        </div>
        <div className="mx-auto max-w-3xl">
          <SheratonCarousel
            venueLabel={l === "ro" ? "Locație" : "Venue"}
            venueName={l === "ro" ? "Hotel Sheraton București" : "Sheraton Hotel Bucharest"}
            addressLabel={l === "ro" ? "Adresa" : "Address"}
            addressText="Calea Dorobanților 5-7, București, România, 010551"
            addressHref="https://maps.app.goo.gl/wnx8PA1WiA7sLFaJ9"
          />
        </div>
      </section>

      <section className="mt-8 mx-auto w-full max-w-4xl">
        <GalaCountdown locale={l} />

        <Link
          href={"https://bit.ly/AIESECRomaniaGala35"}
          target="_blank"
          className="blink-cta group mx-auto block max-w-3xl rounded-3xl bg-gold px-6 py-5 text-center text-black shadow-[0_16px_40px_rgba(226,192,49,0.35)] ring-1 ring-white/35 transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(226,192,49,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <p className="text-xl font-bold sm:text-2xl">
            {l === "ro" ? "Înscrie-te aici #pentruRomânia" : "Register here #pentruRomania"}
          </p>
        </Link>
        <Link
          href={calendarUrl}
          target="_blank"
          className="mx-auto mt-12 block max-w-3xl rounded-2xl border border-subtle bg-background/70 px-6 py-3 text-center text-sm font-bold text-gold transition hover:bg-background/90"
        >
          {l === "ro" ? "Adaugă evenimentul în Google Calendar" : "Add event to Google Calendar"}
        </Link>

        <div className="mx-auto mt-0.5 w-full max-w-3xl overflow-hidden rounded-2xl">
          <Image
            src="/35%20years%20anniversary%20gala.svg"
            alt="35 Years Anniversary Gala"
            width={1400}
            height={360}
            className="h-36 w-full object-cover object-center md:h-48 lg:h-52"
            priority
          />
        </div>
      </section>

      <section className="mx-auto mt-6 w-full max-w-4xl rounded-3xl bg-card px-4 py-5 md:px-6 md:py-6">
        <h2 className="mb-4 text-center text-xl font-semibold text-white sm:text-2xl">
          {l === "ro" ? "Scurtă istorie a AIESEC in România" : "Short history of AIESEC in Romania"}
        </h2>
        <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl">
          <div className="aspect-video w-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/CFBhVqWY0iE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="mx-auto mt-6 w-full max-w-3xl">
          <h3 className="mb-3 text-center text-lg font-semibold text-white sm:text-xl">
            {l === "ro" ? "Întrebări frecvente" : "Frequently asked questions"}
          </h3>

          <div className="space-y-3">
            <details className="group rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                <span>
                  {l === "ro" ? "Cum este construită agenda?" : "How is the agenda structured?"}
                </span>
                <span className="text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="mt-3 space-y-2 text-white/85">
                {l === "ro" ? (
                  <>
                    <p>Evenimentul este împărțit pe două zile:</p>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>
                        <em>24 Aprilie</em>, eveniment extern, unde sunt invitați și partenerii AIESEC în România.
                      </li>
                      <li>
                        <em>25 Aprilie</em>, Gală internă care va găzdui doar alumnii și membrii activi.
                      </li>
                    </ul>
                    <p>
                      Programul complet îl puteți găsi la secțiunea <em>„Agenda”</em>.
                    </p>
                  </>
                ) : (
                  <>
                    <p>The event is split into two days:</p>
                    <ul className="list-disc space-y-1 pl-5">
                      <li>
                        <em>April 24</em>: external event, with AIESEC in Romania partners invited.
                      </li>
                      <li>
                        <em>April 25</em>: internal Gala for alumni and active members only.
                      </li>
                    </ul>
                    <p>
                      You can find the full program in the <em>“Agenda”</em> section.
                    </p>
                  </>
                )}
              </div>
            </details>

            <details className="group rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                <span>{l === "ro" ? "Cazarea este asigurată?" : "Is accommodation provided?"}</span>
                <span className="text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="mt-3 space-y-2 text-white/85">
                {l === "ro" ? (
                  <>
                    <p>
                      Cazarea este disponibilă la <em>Hotel Sheraton</em>, contra cost, atât pentru seara de <em>24</em>,
                      seara de <em>25</em>, cât și pentru ambele. Costurile cazării nu sunt suportate de AIESEC România.
                    </p>
                    <p>
                      Vă puteți asigura cazarea completând <em>formularul de înscriere</em>, alegând opțiunea de cazare.
                    </p>
                    <p>
                      Dacă ați completat formularul și vă răzgândiți în privința cazării, vă rugăm anunțați echipa de
                      organizare, persoana de contact fiind <em>Maria Moga (+40733423730)</em>.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Accommodation is available at <em>Sheraton Hotel</em>, at your own cost, for the night of
                      <em> April 24</em>, <em>April 25</em>, or both nights. Accommodation costs are not covered by AIESEC
                      Romania.
                    </p>
                    <p>
                      You can request accommodation in the <em>registration form</em> by selecting the accommodation
                      option.
                    </p>
                    <p>
                      If you already submitted the form and changed your mind, please notify the organizing team.
                      Contact person: <em>Maria Moga (+40733423730)</em>.
                    </p>
                  </>
                )}
              </div>
            </details>

            <details className="group rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                <span>{l === "ro" ? "Cum pot ajunge la locație?" : "How can I get to the venue?"}</span>
                <span className="text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="mt-3 space-y-3 text-white/85">
                {l === "ro" ? (
                  <>
                    <div>
                      <p className="font-medium text-white">Aeroportul Otopeni (Henri Coandă - OTP)</p>
                      <p>Autobuz STB linia 100 din fața terminalului.</p>
                      <p>Coboară la Piața Romană.</p>
                      <p>Mers pe jos 5-8 minute până la hotel.</p>
                    </div>
                    <div>
                      <p className="font-medium text-white">Aeroportul Băneasa (Aurel Vlaicu - BBU)</p>
                      <p>Autobuz STB spre Piața Victoriei sau Piața Romană (ex. linia 100).</p>
                      <p>Dacă cobori la Piața Victoriei, ia metroul M2 o stație până la Piața Romană.</p>
                      <p>Mers pe jos 5-8 minute până la hotel.</p>
                    </div>
                    <div>
                      <p className="font-medium text-white">Gara de Nord</p>
                      <p>Metrou până la Piața Victoriei.</p>
                      <p>Schimbare pe magistrala M2 până la Piața Romană.</p>
                      <p>Mers pe jos 5-8 minute până la hotel.</p>
                    </div>
                    <p className="font-medium text-white">Punct de referință pentru toate rutele: Piața Romană (M2).</p>
                  </>
                ) : (
                  <>
                    <div>
                      <p className="font-medium text-white">Otopeni Airport (Henri Coandă - OTP)</p>
                      <p>Take STB bus line 100 from the terminal area.</p>
                      <p>Get off at Piața Romană.</p>
                      <p>Walk 5-8 minutes to the hotel.</p>
                    </div>
                    <div>
                      <p className="font-medium text-white">Băneasa Airport (Aurel Vlaicu - BBU)</p>
                      <p>Take an STB bus toward Piața Victoriei or Piața Romană (e.g. line 100).</p>
                      <p>If you get off at Piața Victoriei, take metro M2 one stop to Piața Romană.</p>
                      <p>Walk 5-8 minutes to the hotel.</p>
                    </div>
                    <div>
                      <p className="font-medium text-white">Gara de Nord</p>
                      <p>Take the metro to Piața Victoriei.</p>
                      <p>Transfer to M2 and continue to Piața Romană.</p>
                      <p>Walk 5-8 minutes to the hotel.</p>
                    </div>
                    <p className="font-medium text-white">Reference point for all routes: Piața Romană (M2).</p>
                  </>
                )}
              </div>
            </details>

            <details className="group rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
                <span>{l === "ro" ? "Pe cine pot contacta pentru întrebări?" : "Who can I contact for questions?"}</span>
                <span className="text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="mt-3 space-y-2 text-white/85">
                {l === "ro" ? (
                  <>
                    <p>Persoanele responsabile de Gala Aniversară de 35 de ani - AIESEC în România sunt:</p>
                    <p>
                      Director Organizare: Maria Moga - maria.moga@aiesec.org.ro | +40 733 423 730
                    </p>
                    <p>
                      Project Manager: Ada Popescu - alexandra.popescu@aiesec.org.ro | +40 725 494 514
                    </p>
                    <p>
                      Președinte AIESEC în România: Emil Iftimie - emil.iftimie@aiesec.org.ro | +40 732 262 755
                    </p>
                  </>
                ) : (
                  <>
                    <p>The responsible contacts for the 35th Anniversary Gala - AIESEC in Romania are:</p>
                    <p>
                      Organizing Director: Maria Moga - maria.moga@aiesec.org.ro | +40 733 423 730
                    </p>
                    <p>
                      Project Manager: Ada Popescu - alexandra.popescu@aiesec.org.ro | +40 725 494 514
                    </p>
                    <p>
                      President of AIESEC in Romania: Emil Iftimie - emil.iftimie@aiesec.org.ro | +40 732 262 755
                    </p>
                  </>
                )}
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
