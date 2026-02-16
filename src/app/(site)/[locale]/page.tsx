import Image from "next/image";
import Link from "next/link";
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

      <section className="mt-10 max-w-xl">
        <Link
          href={"https://bit.ly/AIESECRomaniaGala35"}
          target="_blank"
          className="group block rounded-3xl bg-[#730000] p-7 text-white shadow-[0_20px_48px_rgba(115,0,0,0.45)] ring-1 ring-white/25 transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(115,0,0,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-white/75">
            {l === "ro" ? "Inscriere" : "Registration"}
          </p>
          <p className="mt-3 text-2xl font-bold">Register here</p>
          <p className="mt-2 text-sm text-white/85">
            {l === "ro"
              ? "Apasa aici pentru a deschide formularul de inscriere."
              : "Click here to open the registration form."}
          </p>
        </Link>

        <div className="mt-2 flex justify-center">
          <Image
            src="/35%20years%20of%20excellence.svg"
            alt="35 Years of Excellence"
            width={900}
            height={220}
            className="h-auto w-auto max-w-full"
            priority
          />
        </div>
      </section>
    </main>
  );
}
