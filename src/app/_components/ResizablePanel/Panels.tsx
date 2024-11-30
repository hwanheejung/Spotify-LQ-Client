'use client'

import { useLayoutStore } from '@/lib/stores/layout.store'
import { useEffect, useRef, useState } from 'react'
import { ImperativePanelHandle, Panel } from 'react-resizable-panels'

interface PanelProps {
  children: React.ReactNode
  defaultSize: number
}

export const LEFT_PANNEL_SIZE = Object.freeze({
  COLLAPSED: 10,
  DEFAULT: 25,
  EXPANDED: 40,
  MAX: 50,
})

export const RIGHT_PANNEL_SIZE = Object.freeze({
  MIN: 20,
  MAX: 40,
})

export const LeftPanel = ({ children, defaultSize }: PanelProps) => {
  const ref = useRef<ImperativePanelHandle>(null)
  const { setLeftPanelRef, leftPanelState } = useLayoutStore()

  useEffect(() => {
    if (ref.current) setLeftPanelRef(ref)
  }, [ref, setLeftPanelRef])

  useEffect(() => {
    if (ref.current) {
      if (leftPanelState === 'COLLAPSED')
        ref.current.resize(LEFT_PANNEL_SIZE.COLLAPSED)
      if (leftPanelState === 'DEFAULT')
        ref.current.resize(LEFT_PANNEL_SIZE.DEFAULT)
      if (leftPanelState === 'EXPANDED')
        ref.current.resize(LEFT_PANNEL_SIZE.EXPANDED)
    }
  }, [leftPanelState])

  return (
    <Panel
      defaultSize={defaultSize}
      minSize={LEFT_PANNEL_SIZE.COLLAPSED}
      maxSize={LEFT_PANNEL_SIZE.MAX}
      ref={ref}
    >
      {children}
    </Panel>
  )
}

export const MainPanel = ({ children, defaultSize }: PanelProps) => {
  const ref = useRef<ImperativePanelHandle>(null)
  const { setMainPanelRef } = useLayoutStore()

  useEffect(() => {
    if (ref.current) setMainPanelRef(ref)
  }, [ref, setMainPanelRef])

  return (
    <Panel defaultSize={defaultSize} minSize={45} ref={ref}>
      {children}
    </Panel>
  )
}

export const RightPanel = ({ children, defaultSize }: PanelProps) => {
  const ref = useRef<ImperativePanelHandle>(null)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { setRightPanelRef, rightPanelState, setRightPanelState } =
    useLayoutStore()

  // Set panel reference
  useEffect(() => {
    if (ref.current) setRightPanelRef(ref)
  }, [ref, setRightPanelRef])

  // Observe resize changes
  useEffect(() => {
    if (!ref.current) return () => {}

    const element = document.querySelector(
      `[data-panel-id="${ref.current.getId()}"]`,
    ) as HTMLElement | null
    if (!element) return () => {}

    const resizeObserver = new ResizeObserver(() => {
      const collapsed = ref.current?.isCollapsed()
      if (collapsed !== isCollapsed) setIsCollapsed(collapsed || false)
    })

    resizeObserver.observe(element)

    return () => {
      resizeObserver.unobserve(element)
    }
  }, [isCollapsed])

  // Handle panel collapse/expand based on state
  useEffect(() => {
    if (!ref.current) return

    if (rightPanelState) ref.current.expand()
    else ref.current.collapse()
  }, [rightPanelState])

  // Sync `isCollapsed` with `rightPanelState`
  useEffect(() => {
    if (ref.current) {
      if (isCollapsed && rightPanelState) setRightPanelState(null)
      if (!isCollapsed && !rightPanelState) setRightPanelState('NOW_PLAYING')
    }
  }, [isCollapsed])

  return (
    <Panel
      defaultSize={defaultSize}
      collapsible
      minSize={RIGHT_PANNEL_SIZE.MIN}
      maxSize={RIGHT_PANNEL_SIZE.MAX}
      ref={ref}
    >
      {children}
    </Panel>
  )
}
