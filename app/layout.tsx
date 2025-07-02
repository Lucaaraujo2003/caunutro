import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Imersão sem Neura",
  description:
    "Pare de se culpar: Não é falta de força de vontade. Descubra o que REALMENTE impede mulheres 60+ de emagrecer",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://player-vz-30fdd560-ba9.tv.pandavideo.com.br" />
        <link rel="dns-prefetch" href="https://pay.hub.la" />

        {/* Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KM58RN5');
          `}
        </Script>
        {/* End Google Tag Manager Script */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KM58RN5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
