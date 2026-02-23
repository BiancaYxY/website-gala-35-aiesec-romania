export function Footer() {
  return (
    <footer className="mt-10 border-t border-white/15 bg-card text-white/90">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2.5 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-1.5 text-xs sm:gap-2 sm:text-sm">
          <span className="font-semibold text-white">AIESEC in Romania socials:</span>

          <a
            href="https://www.instagram.com/aiesecromania?igsh=MWg5a2x5YjdvNjM4"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 font-medium transition hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
              <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2zm8.5 1.8h-8.5A3.96 3.96 0 0 0 3.8 7.75v8.5a3.96 3.96 0 0 0 3.95 3.95h8.5a3.96 3.96 0 0 0 3.95-3.95v-8.5a3.96 3.96 0 0 0-3.95-3.95zm-4.25 3.45a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.8a2.95 2.95 0 1 0 0 5.9 2.95 2.95 0 0 0 0-5.9zm5.35-2.25a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
            </svg>
            <span>Instagram</span>
          </a>

          <a
            href="https://www.tiktok.com/@aiesec.romania?_r=1&_t=ZN-93yrmdB0IQo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 font-medium transition hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
              <path d="M15.46 4.47a4.17 4.17 0 0 0-.53.03v3.16a2.35 2.35 0 0 1-.38-.03c-2.06 0-3.73 1.69-3.73 3.78s1.67 3.78 3.73 3.78a3.73 3.73 0 0 0 3.73-3.78V2h2.84a4.63 4.63 0 0 1-1.41 3.31 5.2 5.2 0 0 1-3.25 1.51v4.59a6.48 6.48 0 0 1-6.47 6.59A6.48 6.48 0 0 1 3.55 11.4a6.48 6.48 0 0 1 6.47-6.59h.15v2.97h-.15a3.55 3.55 0 0 0-3.55 3.62A3.55 3.55 0 0 0 10.02 15a3.55 3.55 0 0 0 3.55-3.62V4.47h1.89z" />
            </svg>
            <span>TikTok</span>
          </a>

          <a
            href="https://www.facebook.com/AIESECinRomania"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 font-medium transition hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
              <path d="M13.5 8.5V6.75c0-.64.52-1.16 1.16-1.16h1.84V2.5h-2.4A4.6 4.6 0 0 0 9.5 7.1v1.4H7v3.2h2.5v9.8h3.7v-9.8h2.9l.45-3.2h-3.35z" />
            </svg>
            <span>Facebook</span>
          </a>

          <a
            href="https://www.linkedin.com/company/aiesecromania/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 font-medium transition hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.61 0 4.28 2.37 4.28 5.46v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="self-start text-xs sm:self-end sm:text-sm">
          <div className="flex items-center gap-1.5 sm:justify-end">
            <p className="font-medium">Developer: Bianca Cristea</p>
          <a
            href="https://www.linkedin.com/in/bianca-cristea-8375491b3"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 font-medium transition hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
              <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.37-1.86 3.61 0 4.28 2.37 4.28 5.46v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
