import Header from '@/app/_components/Header'
import PlayingBar from '@/app/_components/PlayingBar'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../styles/globals.css'
import { ApolloWrapper } from '@/app/_components/ApolloWrapper'

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
        <ApolloWrapper>
          <Header />
          <div className="flex flex-1 gap-3 overflow-hidden px-3">
            {yourLibrary}
            <main className="flex-1 overflow-y-scroll">{main}</main>
            {sidebar}
          </div>
          <PlayingBar />
        </ApolloWrapper>
      </body>
    </html>
  )
}
