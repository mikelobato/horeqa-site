import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Horeqa — Technology partner for modern hospitality',
  description:
    'Horeqa helps restaurants and hospitality operators implement, integrate, and operate their technology stack. Consulting, implementation, and support for HORECA.',
  icons: {
    icon: '/horeqa_favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#224C86',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
