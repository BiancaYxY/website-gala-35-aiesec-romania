import Image from "next/image";
import Link from "next/link";
import { GalaCountdown } from "@/components/home/GalaCountdown";
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
            "Vă așteptăm pe 24 și 25 aprilie, la București. Locația evenimentului și agenda vor fi trimise în curând❤️‍🔥",
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
            "We are waiting for you on April 24th and 25th, in Bucharest. The event location and agenda will be shared soon❤️‍🔥",
          closing: "See you soon ✨",
          signature: "MC Hora and CC Gala 35 💃🏻",
        };

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
      </section>

      <section className="mt-8 mx-auto w-full max-w-4xl">
        <GalaCountdown locale={l} />

        <Link
          href={"https://bit.ly/AIESECRomaniaGala35"}
          target="_blank"
          className="group mx-auto block max-w-3xl rounded-3xl bg-gold px-6 py-5 text-center text-black shadow-[0_16px_40px_rgba(226,192,49,0.35)] ring-1 ring-white/35 transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(226,192,49,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <p className="text-xl font-bold sm:text-2xl">
            {l === "ro" ? "Înscrie-te aici #pentruRomânia" : "Register here #pentruRomania"}
          </p>
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
      </section>
    </main>
  );
}
