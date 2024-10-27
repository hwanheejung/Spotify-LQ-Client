'use client'

import { useSidebarStore } from '@/lib/stores/useSidebarStore'
import { usePathname, useRouter } from 'next/navigation'
import { AiOutlinePlaySquare } from 'react-icons/ai'
import { HiOutlineDeviceMobile } from 'react-icons/hi'
import { HiOutlineQueueList } from 'react-icons/hi2'
import { TbMicrophone2 } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'
import Button from '../Button'

const Indicator = ({ selected }: { selected: boolean }) => (
  <div
    className={twMerge(
      'mx-auto mt-0.5 h-1 w-1 rounded-full',
      selected ? 'bg-spotifyGreen' : '',
    )}
  />
)

const SidebarNav = () => {
  const { activeComponent, setActiveComponent } = useSidebarStore()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="flex">
      <Button
        tooltip="Now Playing"
        selected={activeComponent === 'NowPlaying'}
        available
        onClick={() => setActiveComponent('NowPlaying')}
      >
        <Button.Icon icon={<AiOutlinePlaySquare size="1.2rem" />} />
        <Indicator selected={activeComponent === 'NowPlaying'} />
      </Button>
      <Button
        tooltip="Lyrics"
        selected={pathname === '/lyrics'}
        available
        onClick={() => router.push('/lyrics')}
      >
        <Button.Icon icon={<TbMicrophone2 size="1.2rem" />} />
        <Indicator selected={pathname === '/lyrics'} />
      </Button>
      <Button
        tooltip="Queue"
        selected={activeComponent === 'Queue'}
        available
        onClick={() => setActiveComponent('Queue')}
      >
        <Button.Icon icon={<HiOutlineQueueList size="1.2rem" />} />
        <Indicator selected={activeComponent === 'Queue'} />
      </Button>
      <Button
        tooltip="Connect to a device"
        selected={activeComponent === 'Device'}
        available
        onClick={() => setActiveComponent('Device')}
      >
        <Button.Icon icon={<HiOutlineDeviceMobile size="1.2rem" />} />
        <Indicator selected={activeComponent === 'Device'} />
      </Button>
    </div>
  )
}

export default SidebarNav
