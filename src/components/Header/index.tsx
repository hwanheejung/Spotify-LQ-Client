import Home from './Home'
import Logo from './Logo'
import Profile from './Profile'
import Search from './Search'

const Header = () => {
  return (
    <div className="relative flex w-full items-center justify-between px-5 py-3">
      <Logo />
      <div className="flex gap-2">
        <Home />
        <Search />
      </div>
      <Profile />
    </div>
  )
}

export default Header
