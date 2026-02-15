import "@/app/globals.css";
import { League_Spartan } from "next/font/google";

const league = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-league",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={`${league.variable} min-h-screen bg-background text-foreground font-sans`}>
        {children}
      </body>
    </html>
  );
}