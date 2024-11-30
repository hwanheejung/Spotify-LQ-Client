'use client'

import { Tooltip } from '@/components/tooltip'
import { useLayoutStore } from '@/lib/stores/layout.store'
import { LiaTimesSolid } from 'react-icons/lia'

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  const { setRightPanelState } = useLayoutStore()

  return (
    <div className="flex items-center justify-between px-4 py-5">
      <p className="font-bold">{title}</p>
      <Tooltip label="Close" spacing={10}>
        <button onClick={() => setRightPanelState(null)}>
          <LiaTimesSolid size="1.3rem" />
        </button>
      </Tooltip>
    </div>
  )
}

export default Header
