import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header1 } from "@/components/ui/header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fixify - Premium Request & Pickup",
  description: "Doorstep pickup and delivery for all your repair needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased font-sans selection:bg-white/20`}
      >
        <div className="flex flex-col min-h-screen">
          <Header1 />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
