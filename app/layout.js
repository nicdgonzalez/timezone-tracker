import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { Navigation } from "@/app/_components/Navigation";
import { Footer } from "@/app/_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: "Timezone Tracker",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <body className={inter.className}>
        <Script src="/js/set-theme.js" />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
