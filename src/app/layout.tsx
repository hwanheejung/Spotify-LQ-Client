import { ApolloWrapper } from '@/app/_components/ApolloWrapper'
import Header from '@/app/_components/Header'
import PlayingBar from '@/app/_components/PlayingBar'
import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { ReactNode } from 'react'
import '../styles/globals.css'
import {
  MainPanel,
  RightPanel,
  LeftPanel,
  LEFT_PANNEL_SIZE,
  Handler,
  ResizableGroup,
} from './_components/ResizablePanel'

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

async function getDefaultLayout(): Promise<number[]> {
  const cookieStore = await cookies()
  const layout = cookieStore.get('react-resizable-panels:layout')
  if (layout) return JSON.parse(layout.value)

  return [LEFT_PANNEL_SIZE.DEFAULT, 40, 30]
}

export default async function RootLayout({
  main,
  yourLibrary,
  sidebar,
}: Readonly<RootLayoutProps>) {
  const defaultLayout = await getDefaultLayout()

  return (
    <html lang="en">
      <body className="flex h-dvh flex-col antialiased">
        <ApolloWrapper>
          <Header />
          <div className="flex-1 overflow-hidden px-3">
            <ResizableGroup>
              <LeftPanel defaultSize={defaultLayout[0]}>
                {yourLibrary}
              </LeftPanel>
              <Handler />
              <MainPanel defaultSize={defaultLayout[1]}>{main}</MainPanel>
              <Handler />
              <RightPanel defaultSize={defaultLayout[2]}>{sidebar}</RightPanel>
            </ResizableGroup>
          </div>
          <PlayingBar />
        </ApolloWrapper>
      </body>
    </html>
  )
}
