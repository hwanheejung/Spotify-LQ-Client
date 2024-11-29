'use client'

import { ReactNode } from 'react'
import { PanelGroup, Panel, PanelResizeHandle } from 'react-resizable-panels'

export const ResizableGroup = ({ children }: { children: ReactNode }) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
  }
  return (
    <PanelGroup direction="horizontal" onLayout={onLayout} className="py-3">
      {children}
    </PanelGroup>
  )
}

export const PanelItem = ({
  children,
  defaultSize,
  minSize,
}: {
  children: ReactNode
  defaultSize: number
  minSize: number
}) => {
  return (
    <Panel defaultSize={defaultSize} minSize={minSize}>
      {children}
    </Panel>
  )
}

export const Handler = () => <PanelResizeHandle className="bg-blue-800 w-2" />
