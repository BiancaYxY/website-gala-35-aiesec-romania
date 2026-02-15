import Image from "next/image";
import Link from "next/link";
import { getDict, t, type Locale } from "@/i18n/getDict";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const dict = getDict(l);

  const signupUrl = "https://forms.gle/PASTE_YOUR_FORM_LINK";

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="max-w-3xl">
        <p className="text-sm text-muted">AIESEC Romania • Gala 35</p>

        <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
          {t(dict, "home.title")} <span className="text-gold">•</span> celebrare & comunitate
        </h1>

        <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">
          {l === "ro"
            ? "O seara premium in care celebram 35 de ani de impact, oameni si povesti. Networking, momente speciale, recunoastere."
            : "A premium evening celebrating 35 years of impact, people, and stories. Networking, special moments, recognition."}
        </p>
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
