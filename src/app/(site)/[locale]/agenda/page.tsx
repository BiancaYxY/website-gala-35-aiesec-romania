import Image from "next/image";

export default async function AgendaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRo = locale === "ro";

  const intro = isRo
    ? "V\u0103 a\u0219tept\u0103m la Gala aniversar\u0103 de 35 de ani pentru AIESEC \u00een Rom\u00e2nia, \u00eentre 24 \u0219i 25 Aprilie 2026, la Hotel Sheraton, Bucure\u0219ti.\n\nProgramul evenimentului pentru ambele zile poate fi g\u0103sit mai jos. Agenda poate suferi modific\u0103ri, toate actualiz\u0103rile vor putea fi vizualizate live pe aceast\u0103 pagin\u0103 \ud83e\udd42"
    : "We are looking forward to welcoming you to the 35th Anniversary Gala of AIESEC in Romania, taking place between April 24 and 25, 2026, at Sheraton Hotel, Bucharest.\n\nThe event schedule for both days can be found below. The agenda may be subject to changes, and all updates will be available live on this page \ud83e\udd42";

  const days = isRo
    ? [
        {
          title: "Ziua 1",
          subtitle: "24 aprilie",
          description: "Eveniment extern de business, unde vor fi invita\u021bi \u0219i parteneri cheie AIESEC \u00een Rom\u00e2nia",
          audience: "Alumni & Parteneri",
          items: [
            { time: "14:15 - 15:00", title: "Sosiri & Networking" },
            { time: "15:00 - 15:30", title: "Deschidere & Discursuri" },
            { time: "15:30 - 16:00", title: "Raport de Impact" },
            { time: "16:00 - 16:45", title: "Pauz\u0103 de Networking" },
            { time: "16:45 - 17:15", title: "MC Partner Keynote" },
            { time: "17:15 - 17:45", title: "LC Partners Keynote" },
            { time: "17:45 - 18:00", title: "Discurs de \u00cenchidere" },
            { time: "18:00 - 19:15", title: "Networking" },
          ],
        },
        {
          title: "Ziua 2",
          subtitle: "25 aprilie",
          description: "Gal\u0103 aniversar\u0103, v\u0103 recomand\u0103m s\u0103 nu pierde\u021bi aceast\u0103 oportunitate de a v\u0103 reconecta cu vechii prieteni",
          audience: "Alumni & Membri activi",
          items: [
            { time: "17:00 - 18:00", title: "Sosiri & Networking" },
            { time: "18:00 - 18:45", title: "Deschiderea Galei 35" },
            { time: "18:45 - 19:15", title: "AIESEC \u00een Rom\u00e2nia - situa\u021bia actual\u0103 local\u0103 26.27" },
            { time: "19:15 - 20:15", title: "Pauz\u0103 de Networking" },
            { time: "20:15 - 21:00", title: "AIESEC \u00een Rom\u00e2nia - 35 de ani de excelen\u021b\u0103 Panel Discussion" },
            { time: "21:00 - 22:00", title: "Celebrare & Closing" },
            { time: "22:00 - 02:00", title: "After Party" },
          ],
        },
      ]
    : [
        {
          title: "Day 1",
          subtitle: "April 24",
          description: "External business event, where key AIESEC in Romania partners will also be invited",
          audience: "Alumni & Partners",
          items: [
            { time: "14:15 - 15:00", title: "Arrivals & Networking" },
            { time: "15:00 - 15:30", title: "Opening & Speeches" },
            { time: "15:30 - 16:00", title: "Impact Report" },
            { time: "16:00 - 16:45", title: "Networking Break" },
            { time: "16:45 - 17:15", title: "MC Partner Keynote" },
            { time: "17:15 - 17:45", title: "LC Partners Keynote" },
            { time: "17:45 - 18:00", title: "Closing Speech" },
            { time: "18:00 - 19:15", title: "Networking" },
          ],
        },
        {
          title: "Day 2",
          subtitle: "April 25",
          description: "Anniversary Gala, we recommend not missing this opportunity to reconnect with old friends",
          audience: "Alumni & Active members",
          items: [
            { time: "17:00 - 18:00", title: "Arrivals & Networking" },
            { time: "18:00 - 18:45", title: "Opening of Gala 35" },
            { time: "18:45 - 19:15", title: "AIESEC in Romania - local current state 26.27" },
            { time: "19:15 - 20:15", title: "Networking Break" },
            { time: "20:15 - 21:00", title: "AIESEC in Romania - 35 years of Excellence Panel Discussion" },
            { time: "21:00 - 22:00", title: "Celebration and Closing" },
            { time: "22:00 - 02:00", title: "After Party" },
          ],
        },
      ];

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <section className="mx-auto mb-4 w-full max-w-3xl overflow-hidden rounded-2xl">
        <Image
          src="/35%20years%20anniversary%20gala.svg"
          alt="35 Years Anniversary Gala"
          width={1400}
          height={360}
          className="mx-auto h-36 w-full object-cover object-center md:h-48 lg:h-52"
          priority
        />
      </section>

      <section className="rounded-3xl border border-subtle bg-[rgb(var(--card)/0.68)] p-5 text-justify shadow-[0_24px_48px_rgba(0,0,0,0.3)] md:p-8">
        <h1 className="text-2xl font-semibold text-foreground md:text-3xl">
          Agenda
        </h1>
        <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-white/85 md:text-base">
          {intro}
        </p>

        <div className="mt-6 space-y-4">
          {days.map((day) => (
            <details
              key={day.title}
              className="group overflow-hidden rounded-2xl border border-white/15 bg-[linear-gradient(180deg,rgba(75,0,0,0.88),rgba(47,7,11,0.92))] text-white shadow-[0_14px_30px_rgba(0,0,0,0.2)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
                <div>
                  <p className="text-lg font-semibold">{day.title}</p>
                  <p className="text-sm text-white/70">{day.subtitle}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{day.description}</p>
                </div>
                <span className="text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>

              <div className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-white/85 md:text-base">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold/90">
                    {day.audience}
                  </p>
                  <div className="space-y-2">
                    {day.items.map((item) => (
                      <div
                        key={`${item.time}-${item.title}`}
                        className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <p className="text-sm font-semibold text-gold">{item.time}</p>
                        <p className="text-sm font-medium text-white sm:text-right">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
