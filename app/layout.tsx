import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Identity Kit — One link for Indian Creators',
  description: 'AI-powered Media Kit, Rate Card and CV for Indian creators. One beautiful shareable link.',
  openGraph: {
    title: 'Identity Kit — One link for Indian creators',
    description: 'Get your professional creator profile in one shareable link.',
    url: 'https://identitykit.in',
    siteName: 'Identity Kit',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        {/* Preconnect for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/*
          FIX 1 — Fonts: preload then swap to stylesheet so it never blocks render.
          The <noscript> fallback handles browsers with JS disabled.
        */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          media="print"
          // @ts-expect-error — onLoad on link is valid HTML, TS types don't include it
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          />
        </noscript>

        {/*
          FIX 1 — Tabler Icons: same deferred pattern.
          Icons are decorative — a brief FOUT is acceptable and far better than
          blocking the entire render for 5+ seconds on slow mobile connections.
        */}
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.8.0/dist/tabler-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.8.0/dist/tabler-icons.min.css"
          media="print"
          // @ts-expect-error — onLoad on link is valid HTML, TS types don't include it
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.8.0/dist/tabler-icons.min.css"
          />
        </noscript>
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QMRLR11S45" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QMRLR11S45');
        `}</Script>
      </body>
    </html>
  )
}
