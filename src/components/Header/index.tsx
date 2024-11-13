import { auth } from '@/lib/utils/auth/auth'
import { deleteSession } from '@/lib/utils/auth/session'
import Home from './Home'
import LoginBtn from '../Button/LoginBtn'
import Logo from './Logo'
import Profile from './Profile'
import Search from './Search'

const Header = async () => {
  const { isAuthenticated } = await auth()

  const logout = async () => {
    'use server'

    await deleteSession()
  }

  return (
    <div className="flex w-full items-center justify-between px-5 py-3">
      <Logo />
      <div className="flex gap-2">
        <Home />
        <Search />
      </div>
      {isAuthenticated ? <Profile logout={logout} /> : <LoginBtn />}
    </div>
  )
}

export default Header
