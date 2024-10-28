import Header from '@/components/Header'
import PlayingBar from '@/components/PlayingBar'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Spotify',
  description:
    'A Spotify lyrics translation and real-time synchronization tool',
}

interface RootLayoutProps {
  main: ReactNode
  yourLibrary: ReactNode
  sidebar: ReactNode
}

export default function RootLayout({
  main,
  yourLibrary,
  sidebar,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body className="flex h-dvh flex-col antialiased">
        <Header />
        <div className="flex flex-1 gap-3 px-3">
          <aside>{yourLibrary}</aside>
          <main className="flex-1">{main}</main>
          <aside>{sidebar}</aside>
        </div>
        <PlayingBar />
      </body>
    </html>
  )
}
