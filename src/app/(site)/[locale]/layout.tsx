import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { getDict, t, type Locale } from "@/i18n/getDict";

const LOCALES = ["ro", "en"] as const;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as any)) notFound();

  const dict = getDict(locale as Locale);

  return (
    <>
      <Header
        labels={{
          home: t(dict, "nav.home"),
          agenda: t(dict, "nav.agenda"),
          participants: t(dict, "nav.participants"),
          donations: t(dict, "nav.donations"),
          shop: t(dict, "nav.shop"),
          faq: t(dict, "nav.faq"),
        }}
      />
      {children}
    </>
  );
}