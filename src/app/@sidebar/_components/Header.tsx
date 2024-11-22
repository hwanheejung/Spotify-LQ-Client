'use client'

import Tooltip from '@/components/Tooltip'
import { useSidebarStore } from '@/lib/stores/useSidebarStore'
import { LiaTimesSolid } from 'react-icons/lia'

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  const { setActiveComponent } = useSidebarStore()
  return (
    <div className="flex items-center justify-between px-4 py-5">
      <p className="font-bold">{title}</p>
      <Tooltip label="Close" distance={10}>
        <button onClick={() => setActiveComponent(null)}>
          <LiaTimesSolid size="1.3rem" />
        </button>
      </Tooltip>
    </div>
  )
}

export default Header
