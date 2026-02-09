import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KEC × GUVI – DevOps Collaboration Program',
  description:
    'Empowering students with industry-ready DevOps skills through collaborative training',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#194a7d',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
