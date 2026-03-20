import type { Metadata } from "next";
import "./globals.css";
import { Header1 } from "@/components/ui/header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Outfit } from "next/font/google"; // Closest match to Google Sans

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gofex - Premium Doorstep Repair & Pickup Service",
  description: "Doorstep pickup and delivery for all your repair needs. From electronics to footwear, we fix it all with expert care and real-time tracking.",
  keywords: ["repair service", "doorstep pickup", "electronics repair", "sneaker cleaning", "appliance repair", "Gofex"],
  authors: [{ name: "Gofex Team" }],
  openGraph: {
    title: "Gofex - Premium Doorstep Repair & Pickup Service",
    description: "Doorstep pickup and delivery for all your repair needs.",
    url: "https://gofex.com",
    siteName: "Gofex",
    images: [
      {
        url: "/fixify-preview.png",
        width: 1200,
        height: 630,
        alt: "Gofex Service Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gofex - Premium Doorstep Repair & Pickup Service",
    description: "Doorstep pickup and delivery for all your repair needs.",
    images: ["/fixify-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable}`}>
      <body
        className={`antialiased font-sans selection:bg-white/20`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header1 />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
