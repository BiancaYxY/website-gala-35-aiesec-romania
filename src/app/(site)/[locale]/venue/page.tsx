import Image from "next/image";
import { SheratonCarousel } from "@/components/home/SheratonCarousel";
import { TrackedCtaLink } from "@/components/TrackedCtaLink";
import { type Locale } from "@/i18n/getDict";

export default async function VenuePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const isRo = l === "ro";

  const copy = isRo
    ? {
        label: "Mesaj de la",
        title: "Sheraton Bucharest Hotel",
        intro:
          "Preg\u0103ti\u021bi-v\u0103 s\u0103 s\u0103rb\u0103torim \u00eempreun\u0103 \u00eentr-un cadru special! Gala din acest an va avea loc la Sheraton Bucharest Hotel, chiar \u00een inima ora\u0219ului. \ud83c\udf1f",
        paragraph:
          "Situat perfect \u00een centrul Bucure\u0219tiului, hotelul se afl\u0103 la c\u00e2\u021biva pa\u0219i de Centrul Vechi, restaurante excelente, magazine \u0219i via\u021ba de noapte - ceea ce \u00eenseamn\u0103 c\u0103 distrac\u021bia nu se opre\u0219te odat\u0103 cu gala.",
        hotelTitle: "Ce v\u0103 a\u0219teapt\u0103 la hotel?",
        hotelFeatures: [
          "Mic dejun tip bufet bogat - perfect pentru diminea\u021ba de dup\u0103 petrecere",
          "Wi-Fi gratuit",
          "Restaurant \u0219i bar \u00een incint\u0103",
          "Sal\u0103 de fitness \u0219i saun\u0103",
          "Piscin\u0103",
          "Aproape de magazine, restaurante \u0219i atrac\u021bii din ora\u0219",
        ],
        perksTitle: "Beneficii exclusive pentru comunitatea AIESEC",
        perks: [
          "Tarife speciale pentru camere disponibile doar prin linkul de rezervare pe care \u00eel ve\u021bi primi dup\u0103 \u00eenregistrare.",
          "Reducere la parcare - veni\u021bi cu ma\u0219ina? Parcarea este disponibil\u0103 la doar 80 RON / noapte / ma\u0219in\u0103.",
          "10% reducere la m\u00e2ncare \u00een hotel pe durata evenimentului.",
        ],
        perkIcons: ["\ud83c\udfe8", "\ud83d\ude97", "\ud83c\udf5d"],
        note:
          "Spune\u021bi doar c\u0103 face\u021bi parte din AIESEC 35 Gala, iar reducerea va fi aplicat\u0103.",
        closing: [
          "Conecta\u021bi-v\u0103 cu prieteni din toat\u0103 lumea",
          "S\u0103rb\u0103tori\u021bi 35 de ani de impact",
          "Tr\u0103i\u021bi o sear\u0103 pe care nu o ve\u021bi uita",
        ],
        closingIcons: ["\ud83c\udf0d", "\u2728", "\ud83e\udd42"],
        finalLine:
          "\u00cenregistra\u021bi-v\u0103, rezerva\u021bi-v\u0103 cazarea \u0219i preg\u0103ti\u021bi-v\u0103 pentru o experien\u021b\u0103 AIESEC memorabil\u0103 \u00een Bucure\u0219ti!",
        bookRoom: "Rezerv\u0103 o camer\u0103",
        cancellationTitle: "Politica de anulare:",
        cancellationItems: [
          "Anul\u0103rile primite cu 25 de zile sau mai mult \u00eenainte de data sosirii nu implic\u0103 nicio penalizare.",
          "Anul\u0103rile primite cu 24 - 15 zile \u00eenainte de data sosirii implic\u0103 o penalizare egal\u0103 cu valoarea primei nop\u021bi de cazare.",
          "Anul\u0103rile primite cu 14 zile sau mai pu\u021bin \u00eenainte de data sosirii implic\u0103 o penalizare egal\u0103 cu valoarea total\u0103 a cazării rezervate.",
        ],
        venueName: "Hotel Sheraton Bucure\u0219ti",
        addressLabel: "Adresa",
        addressText: "Calea Doroban\u021bilor 5-7, Bucure\u0219ti, Rom\u00e2nia, 010551",
        }
    : {
        label: "A message from",
        title: "Sheraton Bucharest Hotel",
        intro:
          "Get ready to celebrate together in a special setting. This year's Gala will take place at Sheraton Bucharest Hotel, right in the heart of the city. \ud83c\udf1f",
        paragraph:
          "Perfectly located in central Bucharest, the hotel is just steps away from the Old Town, excellent restaurants, shopping, and nightlife - which means the experience does not stop when the Gala ends.",
        hotelTitle: "What awaits you at the hotel?",
        hotelFeatures: [
          "Rich buffet breakfast - perfect for the morning after the party",
          "Wi-Fi included",
          "On-site restaurant and bar",
          "Fitness room and sauna",
          "Pool",
          "Close to shops, restaurants, and city attractions",
        ],
        perksTitle: "Exclusive benefits for the AIESEC community",
        perks: [
          "Special room rates available only through the booking link you will receive after registration.",
          "Parking discount - coming by car? Parking is available for just 80 RON / night / car.",
          "10% discount on hotel food during the event.",
        ],
        perkIcons: ["\ud83c\udfe8", "\ud83d\ude97", "\ud83c\udf5d"],
        note: "Just mention that you are part of AIESEC 35 Gala and the discount will be applied.",
        closing: [
          "Reconnect with friends from all over the world",
          "Celebrate 35 years of impact",
          "Live a night you will not forget",
        ],
        closingIcons: ["\ud83c\udf0d", "\u2728", "\ud83e\udd42"],
        finalLine:
          "Register, book your stay, and get ready for a memorable AIESEC experience in Bucharest.",
        bookRoom: "Book a room",
        cancellationTitle: "Cancellation policy:",
        cancellationItems: [
          "Cancellations received 25 days or more before the arrival date will incur no penalty.",
          "Cancellations received 24 - 15 days before the arrival date will incur a penalty equal to the value of the first night of accommodation.",
          "Cancellations received 14 days or less before the arrival date will incur a penalty equal to the total value of the reserved accommodation.",
        ],
        venueName: "Sheraton Hotel Bucharest",
        addressLabel: "Address",
        addressText: "Calea Doroban\u021bilor 5-7, Bucharest, Romania, 010551",
      };

  return (
    <main className="mx-auto max-w-6xl px-4 pt-1 pb-6">
      <section className="mx-auto mb-0.5 w-full max-w-4xl overflow-hidden rounded-2xl">
        <Image
          src="/rooted%20in%20romania.svg"
          alt="Rooted in Romania"
          width={1400}
          height={360}
          className="h-56 w-full object-cover object-center md:h-72 lg:h-80"
          priority
        />
      </section>

      <section className="mx-auto w-full max-w-4xl rounded-3xl bg-[#4b0000]/85 px-4 py-6 ring-1 ring-white/15 md:px-8 md:py-8 lg:px-10">
        <div className="mx-auto max-w-3xl space-y-4 text-justify text-base text-white/90 sm:text-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{copy.label}</p>
          <h1 className="text-left text-3xl font-semibold text-foreground md:text-4xl">{copy.title}</h1>
          <p>{copy.intro}</p>
          <p>{copy.paragraph}</p>

          <div className="space-y-3">
            <p className="font-semibold text-foreground">&#127976; {copy.hotelTitle}</p>
            <ul className="space-y-2 pl-1">
              {copy.hotelFeatures.map((item) => (
                <li key={item}>&#10024; {item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-semibold text-foreground">&#128064; {copy.perksTitle}</p>
            <ul className="space-y-2 pl-1">
              {copy.perks.map((item, index) => (
                <li key={item}>
                  {copy.perkIcons[index]} {item}
                </li>
              ))}
            </ul>
            <p>{copy.note}</p>
          </div>

          <div className="space-y-2">
            {copy.closing.map((item, index) => (
              <p key={item}>
                {copy.closingIcons[index]} {item}
              </p>
            ))}
          </div>
          <p className="font-medium text-foreground">{copy.finalLine}</p>
          <div className="flex justify-center">
            <TrackedCtaLink
              href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1773398031304&key=GRP&app=resvlink"
              eventName="book_room_button_clicked"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-[16rem] items-center justify-center rounded-full bg-gold px-8 py-4 text-base font-extrabold uppercase tracking-[0.08em] text-black shadow-[0_20px_48px_rgba(226,192,49,0.45)] ring-1 ring-white/40 transition duration-200 hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(226,192,49,0.55)] md:min-w-[18rem] md:text-lg"
            >
              {copy.bookRoom}
            </TrackedCtaLink>
          </div>

          <div className="rounded-2xl border border-white/15 bg-black/10 px-4 py-4 text-left text-sm text-white/85 md:px-5 md:text-base">
            <p className="font-semibold text-foreground">{copy.cancellationTitle}</p>
            <ul className="mt-3 space-y-2">
              {copy.cancellationItems.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-3xl">
          <SheratonCarousel
            venueLabel={copy.label}
            venueName={copy.venueName}
            addressLabel={copy.addressLabel}
            addressText={copy.addressText}
            addressHref="https://maps.app.goo.gl/wnx8PA1WiA7sLFaJ9"
            showVenueHeader={false}
          />
        </div>
      </section>
    </main>
  );
}
