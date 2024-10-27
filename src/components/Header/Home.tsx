import Link from 'next/link'
import { GrHomeRounded } from 'react-icons/gr'

const Home = () => (
  <Link
    href="/"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 text-gray-200"
  >
    <GrHomeRounded size="1.3rem" />
  </Link>
)

export default Home
