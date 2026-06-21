import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./components/ui";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

// DM Sans is used ONLY for numbers / prices (AED, figures).
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dmsans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Olga Events — Luxury Wedding Planning in Dubai",
    template: "%s",
  },
  description:
    "Olga Events plans and styles luxury weddings across Dubai and all Emirates. The flowers, the light, the timing, your guests, all on us.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${dmSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
