export default async function LivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isRo = locale === "ro";

  const title = isRo ? "Live" : "Live";
  const subtitle = isRo
    ? "Urmărește Gala 35 în direct"
    : "Watch Gala 35 live";
  const note = isRo
    ? "Livestream-ul va fi disponibil când evenimentul începe."
    : "The livestream will be available when the event begins.";

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <section className="rounded-3xl border border-subtle bg-[rgb(var(--card)/0.68)] p-5 shadow-[0_24px_48px_rgba(0,0,0,0.3)] md:p-8">
        <h1 className="text-2xl font-semibold text-foreground md:text-3xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-white/70">{subtitle}</p>

        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://www.facebook.com/events/1497516401899786/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-[#1877f2]/40 bg-[#0a1929]/80 px-6 py-3.5 text-sm font-semibold text-[#74b3ff] shadow-[0_8px_24px_rgba(24,119,242,0.15)] transition hover:-translate-y-0.5 hover:border-[#1877f2]/70 hover:bg-[#0d2040]/90 hover:shadow-[0_12px_32px_rgba(24,119,242,0.28)] sm:w-auto sm:min-w-[200px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
            {isRo ? "Grup Facebook" : "Facebook Group"}
          </a>
          <a
            href="https://www.youtube.com/@mc.romania/featured"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-[#ff0000]/40 bg-[#1a0a0a]/80 px-6 py-3.5 text-sm font-semibold text-[#ff7070] shadow-[0_8px_24px_rgba(255,0,0,0.12)] transition hover:-translate-y-0.5 hover:border-[#ff0000]/70 hover:bg-[#260d0d]/90 hover:shadow-[0_12px_32px_rgba(255,0,0,0.25)] sm:w-auto sm:min-w-[200px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 24 17" fill="currentColor" aria-hidden="true">
              <path d="M23.495 2.659A3.01 3.01 0 0 0 21.38.522C19.505 0 12 0 12 0S4.495 0 2.62.522A3.01 3.01 0 0 0 .505 2.659C0 4.552 0 8.5 0 8.5s0 3.948.505 5.841a3.01 3.01 0 0 0 2.115 2.137C4.495 17 12 17 12 17s7.505 0 9.38-.522a3.01 3.01 0 0 0 2.115-2.137C24 12.448 24 8.5 24 8.5s0-3.948-.505-5.841zM9.545 12.068V4.932L15.818 8.5l-6.273 3.568z"/>
            </svg>
            YouTube
          </a>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_14px_30px_rgba(0,0,0,0.4)]">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/24c3kM7m-8c"
              title="AIESEC in Romania – Gala 35 Live"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-white/45">{note}</p>
      </section>
    </main>
  );
}
