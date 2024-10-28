import Home from './Home'
import LoginBtn from '../Button/LoginBtn'
import Logo from './Logo'
// import Profile from './Profile'
import Search from './Search'

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between px-5 py-3">
      <Logo />
      <div className="flex gap-2">
        <Home />
        <Search />
      </div>
      <LoginBtn />
      {/* <Profile /> */}
    </div>
  )
}

export default Header
