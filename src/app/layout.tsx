import "@/app/globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  baseURL,
  description,
  contactEmail,
  indexable,
  siteName,
} from "@/config";

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: { default: siteName, template: `%s | ${siteName}` },
  description,
  robots: { index: indexable, follow: true },
  verification: {
    google: "b71n4GlEH4GlWrhmpqD-msmnfLQ6Asn8K66NYDuQuxc", 
  },
};

const themeScript = `try{const t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch{}`;

const plausibleScript = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {plausibleScript && (
          <>
            <script async src={plausibleScript}></script>
            <script
              dangerouslySetInnerHTML={{
                __html:
                  "window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()",
              }}
            />
          </>
        )}
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header contactEmail={contactEmail} />
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  );
}