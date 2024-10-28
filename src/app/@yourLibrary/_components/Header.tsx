import { IoLibrarySharp } from 'react-icons/io5'
import { GoPlus } from 'react-icons/go'

const Header = () => {
  return (
    <div className="flex items-center justify-between px-3 py-4 text-gray-200">
      <button className="flex gap-2 hover:text-gray-0">
        <IoLibrarySharp size="1.4rem" style={{ paddingBottom: 2 }} />
        <span className="text-md font-bold">Your Library</span>
      </button>
      <GoPlus size="1.6rem" />
    </div>
  )
}

export default Header
