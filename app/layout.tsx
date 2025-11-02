import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'TasteLens — Visual Menu made easy',
  description: 'Turn text-based menus into visual menus with AI. QR-ready in minutes.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
