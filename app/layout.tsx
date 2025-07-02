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
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://player-vz-30fdd560-ba9.tv.pandavideo.com.br" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://img.youtube.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://pay.hub.la" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />

        {/* Preload critical assets */}
        <link rel="preload" href="/images/dra-claudia-nova.jpeg" as="image" type="image/jpeg" />

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
        <Script id="hubla-utm-tracking" strategy="afterInteractive">
          {`
            (function() {
              'use strict';
              const prefixDomains = ["https://pay.hub.la", "https://invoice.hub.la", "https://app.hub.la", "https://hub.la"];
              
              function getUtmParams() {
                const url = new URL(window.location.href);
                const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
                const values = utms.map(param => url.searchParams.get(param) || '');
                return values.some(v => v) ? \`&sck=\${values.join('|')}\` : '';
              }
              
              function updateLinks() {
                const urlParams = new URLSearchParams(window.location.search);
                if (!urlParams.toString()) return;
                
                const utmParams = getUtmParams();
                const allParams = urlParams.toString() + utmParams;
                
                document.querySelectorAll('a[href*="hub.la"]').forEach(link => {
                  if (prefixDomains.some(domain => link.href.startsWith(domain))) {
                    link.href += (link.href.includes('?') ? '&' : '?') + allParams;
                  }
                });
              }
              
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', updateLinks);
              } else {
                updateLinks();
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
