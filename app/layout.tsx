import type { Metadata, Viewport } from "next";
import "./globals.css";
import { createTrn } from "@/lib/trn";
import { META_TRANSLATIONS } from "@/translations/meta";

const TRN = createTrn(META_TRANSLATIONS.en);

export const metadata: Metadata = {
  title: {
    default: "Horeqa",
    template: "%s | Horeqa",
  },
  description: TRN(
    "meta.global.description",
    "Horeqa helps restaurants and hospitality operators implement, integrate, and operate their technology stack.",
    null,
    "Translate 'hospitality' as the industry term: Spanish should use 'hostelería' (not 'hospitalidad')."
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
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
