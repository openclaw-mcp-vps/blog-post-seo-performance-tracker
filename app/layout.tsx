import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blog Post SEO Performance Tracker',
  description: 'Track SEO performance of individual blog posts — keyword rankings, CTR, and organic traffic with AI-powered suggestions.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="892789db-a4ba-4d87-b4a4-d22bda26471f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
