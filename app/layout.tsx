import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
        {/* ── FONT STRATEGY: preconnect first, then non-blocking preload ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/*
          KEY FIX: use rel="preload" as="style" + onload swap
          This makes fonts NON-render-blocking — page paints immediately
          with system font fallback, then swaps to the real font silently.
          This alone saves ~1.5-2s on FCP.
        */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
        />
        {/* Fallback for browsers that support preload but not the onload trick */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          media="print"
          // @ts-ignore
          onLoad="this.media='all'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          />
        </noscript>

        {/* Tabler Icons — same non-blocking preload pattern */}
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.8.0/dist/tabler-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.8.0/dist/tabler-icons.min.css"
          media="print"
          // @ts-ignore
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
      </body>
    </html>
  )
}
