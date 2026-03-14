import { RedirectToExternal } from "@/components/RedirectToExternal";

export default function BookRoomRedirectPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <p className="text-lg text-foreground">Redirecting...</p>
      <RedirectToExternal href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1773398031304&key=GRP&app=resvlink" />
    </main>
  );
}
