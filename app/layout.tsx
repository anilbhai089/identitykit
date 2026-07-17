import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Identity Kit — One Link for Creators',
  description: 'AI-powered Media Kit, Rate Card and CV for content creators. One beautiful shareable link.',
  openGraph: {
    title: 'Identity Kit — One Link for Creators',
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
        {/* Fonts — loaded ONCE here, not in every page */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Fraunces:ital,wght@0,500;0,600;1,500&display=swap"
        />
        {/* Tabler Icons — loaded ONCE here, not in every page */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.8.0/dist/tabler-icons.min.css"
        />
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
