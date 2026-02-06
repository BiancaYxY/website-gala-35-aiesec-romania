import { getDict, t, type Locale } from "@/i18n/getDict";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = locale as Locale;
  const dict = getDict(l);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-2xl font-semibold">{t(dict, "home.title")}</h1>
      <p className="mt-2 text-muted">{t(dict, "home.subtitle")}</p>
      <div className="rounded-2xl bg-white p-6 text-white">
        TEST: văd conținutul?
      </div>
    </main>
  );
}