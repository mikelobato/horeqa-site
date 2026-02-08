import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { createTrn } from "@/lib/trn";
import { META_TRANSLATIONS } from "@/translations/meta";

const TRN = createTrn(META_TRANSLATIONS.en);
const GA_MEASUREMENT_ID = "G-PF1R8HGELN";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Horeqa",
    template: "%s | Horeqa",
  },
  description: TRN(
    "meta.global.description",
    "Horeqa helps restaurants and hospitality operators implement, integrate, and operate their technology stack.",
    null,
    "Translate 'hospitality' as the industry term: Spanish should use 'hosteleria' (not 'hospitalidad')."
  ),
  icons: {
    icon: "/horeqa_favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#224C86",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${sora.variable}`} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === "production" ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
