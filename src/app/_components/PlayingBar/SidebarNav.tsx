'use client'

import { Tooltip, TooltipOptions } from '@/components/tooltip'
import { useSidebarStore } from '@/lib/stores/sidebar.store'
import { usePathname, useRouter } from 'next/navigation'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { HiOutlineDeviceMobile } from 'react-icons/hi'
import { HiOutlineQueueList } from 'react-icons/hi2'
import { TbMicrophone2 } from 'react-icons/tb'
import { ReactNode } from 'react'
import Button from './IconButton'

interface SidebarNavItemProps extends Pick<TooltipOptions, 'placement'> {
  label: string
  selected: boolean
  onClick: () => void
  icon: ReactNode
}

const SidebarNavItem = ({
  label,
  selected,
  onClick,
  icon,
  placement = 'top',
}: SidebarNavItemProps) => (
  <Tooltip label={label} spacing={20} placement={placement}>
    <Button selected={selected} onClick={onClick} icon={icon} />
  </Tooltip>
)

const SidebarNav = () => {
  const { activeComponent, setActiveComponent } = useSidebarStore()
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    {
      label: 'Now playing view',
      selected: activeComponent === 'NowPlaying',
      onClick: () => setActiveComponent('NowPlaying'),
      icon: <AiOutlinePlaySquare size="1.2rem" />,
    },
    {
      label: 'Lyrics',
      selected: pathname === '/lyrics',
      onClick: () => router.push(pathname === '/lyrics' ? '/' : '/lyrics'),
      icon: <TbMicrophone2 size="1.2rem" />,
    },
    {
      label: 'Queue',
      selected: activeComponent === 'Queue',
      onClick: () => setActiveComponent('Queue'),
      icon: <HiOutlineQueueList size="1.2rem" />,
    },
    {
      label: 'Connect to a device',
      selected: activeComponent === 'Device',
      onClick: () => setActiveComponent('Device'),
      icon: <HiOutlineDeviceMobile size="1.2rem" />,
      tooltipPlacement: 'top-end',
    },
  ]

  return (
    <div className="flex items-center justify-end">
      {navItems.map((item) => (
        <SidebarNavItem key={item.label} {...item} />
      ))}
    </div>
  )
}

export default SidebarNav
