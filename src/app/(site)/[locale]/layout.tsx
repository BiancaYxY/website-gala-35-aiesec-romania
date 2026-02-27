import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { getDict, t, type Locale } from "@/i18n/getDict";

const LOCALES: readonly Locale[] = ["ro", "en"];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  const currentLocale = locale as Locale;
  const dict = getDict(currentLocale);

  return (
    <>
      <Header
        labels={{
          home: t(dict, "nav.home"),
          agenda: t(dict, "nav.agenda"),
          participants: t(dict, "nav.participants"),
          donations: t(dict, "nav.donations"),
          shop: t(dict, "nav.shop"),
        }}
      />
      <div className="pt-20">{children}</div>
    </>
  );
}
