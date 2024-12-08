import Link from 'next/link'
import { FaSpotify } from 'react-icons/fa'

const Logo = () => (
  <Link href="/" aria-label="Spotify logo, go to home">
    <FaSpotify size="2rem" />
  </Link>
)

export default Logo
