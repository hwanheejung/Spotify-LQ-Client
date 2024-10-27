import Link from 'next/link'
import SidebarNav from './SidebarNav'

const PlayingBar = () => {
  return (
    <div className="w-full bg-gray-300">
      <Link href="/lyrics">Lyrics</Link>
      <SidebarNav />
    </div>
  )
}

export default PlayingBar
