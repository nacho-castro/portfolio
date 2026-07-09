import { Analytics } from '@vercel/analytics/next'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import { SEOSchema } from '@/components/seo-schema'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ignacio Castro - Full Stack Developer',
  description:
    'Full Stack Developer specializing in modern web applications, JavaScript frameworks, and cloud technologies.',
  keywords: [
    'developer',
    'full stack',
    'react',
    'nextjs',
    'typescript',
    'javascript',
  ],
  authors: [{ name: 'Ignacio Castro' }],
  creator: 'Ignacio Castro',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ignacio-castro.dev',
    siteName: 'Ignacio Castro',
    title: 'Ignacio Castro - Full Stack Developer',
    description:
      'Full Stack Developer specializing in modern web applications, JavaScript frameworks, and cloud technologies.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ignacio Castro - Full Stack Developer',
    description:
      'Full Stack Developer specializing in modern web applications, JavaScript frameworks, and cloud technologies.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        <SEOSchema />
      </head>
      <body className={`${inter.className} antialiased text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
