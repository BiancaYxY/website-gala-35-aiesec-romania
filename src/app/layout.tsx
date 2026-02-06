import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}