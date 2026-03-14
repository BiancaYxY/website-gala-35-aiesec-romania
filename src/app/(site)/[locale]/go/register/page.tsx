import { RedirectToExternal } from "@/components/RedirectToExternal";

export default function RegisterRedirectPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <p className="text-lg text-foreground">Redirecting...</p>
      <RedirectToExternal href="https://bit.ly/AIESECRomaniaGala35" />
    </main>
  );
}
